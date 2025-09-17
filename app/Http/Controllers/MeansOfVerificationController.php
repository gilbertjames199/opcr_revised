<?php

namespace App\Http\Controllers;

use App\Models\MeansOfVerification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MeansOfVerificationController extends Controller
{
    protected $mov;
    public function __construct(MeansOfVerification $mov)
    {
        $this->mov = $mov;
    }
    public function get_mov(Request $request, $opcr_id){
        return $this->mov->where('opcr_id', $opcr_id)->get();
    }
    public function store(Request $request, $opcr_id, $opcr_list_id){
        $subfolder = auth()->user()->username;
        $opcr_id = $request->opcr_id;
        Storage::disk('custom_uploads')->makeDirectory($subfolder);
        $request->validate([
            'file' => 'required|file|max:51200', // 50MB max
        ]);

        $totalSize = MeansOfVerification::where('user_id', auth()->id())->sum('file_size'); // in bytes
        $maxSize = 1024 * 1024 * 1024;
        if ($totalSize >= $maxSize) {
            return redirect()->back()->withErrors(['error' => 'You have reached the 1 GB storage limit.']);
        }
        $file = $request->file('file');
        $filename = time() . '_' . $file->getClientOriginalName();
        // $path = $file->storeAs('', $filename, 'custom_files'); // See disk config below
        $path = $file->storeAs($subfolder, $filename, 'custom_uploads');

        MeansOfVerification::create([
            'user_id' => auth()->user()->id,
            'filename' => $file->getClientOriginalName(),
            'filepath' => $subfolder . '/' . $filename,
            'file_type'  => $file->getClientOriginalExtension(), // Save extension
            'file_size'  => $file->getSize(), // in bytes
            'opcr_id' => $request->opcr_id,
            'opcr_list_id'=> $request->opcr_list_id
        ]);

        return redirect()->back()->with('success', 'File uploaded successfully.');
    }
}
