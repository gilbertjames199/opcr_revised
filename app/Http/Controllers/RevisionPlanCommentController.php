<?php

namespace App\Http\Controllers;

use App\Models\RevisionPlanComment;
use Illuminate\Http\Request;

class RevisionPlanCommentController extends Controller
{
    protected $revisionPlanComment;
    public function __construct(RevisionPlanComment $revisionPlanComment)
    {
        $this->revisionPlanComment = $revisionPlanComment;
    }

    public function index()
    {
        // Logic to retrieve and return comments for revision plans
        // This could involve fetching comments from the database
        // and returning them in a view or as a JSON response.
    }
    public function storeComment(Request $request)
    {
        // dd($request->params);
        // dd(auth()->user()->recid);
        $request->validate([
            'params.comment' => 'required',
        ]);
        $comment = new RevisionPlanComment();
        $comment->table_row_id = $request->params['table_row_id'];
        $comment->table_name = $request->params['table_name'];
        $comment->column_name = $request->params['column_name'];
        $comment->comment = $request->params['comment'];
        $comment->comment_status = '0'; // Default to '0' if not provided
        $comment->user_id = auth()->user()->recid; // Assuming user is authenticated
        // Only store fuzzy data for rationale, objectives, target_beneficiaries
        if(in_array($request->params['column_name'], ['rationale', 'objectives', 'target_beneficiaries'])){
            $comment->selected_text = $request->input('selected_text');
            $comment->start_index = $request->input('start_index');
            $comment->end_index = $request->input('end_index');
            $comment->context_before = $request->input('context_before');
            $comment->context_after = $request->input('context_after');
        }
        $comment->save();
        return back()->with('success', 'Comment added successfully.');
        // $request->params['comment']
    }
    public function actionComment(Request $request)
    {
        // dd($request->params);
        $action = $request->params['type'];
        $id = $request->params['id'];
        if ($action == 'delete') {
            // dd("delete");
            $this->destroyComment($id);
            return back()->with('success', 'Comment deleted successfully');
        } else  if ($action == 'reset') {
            // dd("reset");
            $this->updateStatus($id, '0');
            return back()->with('success', 'Comment status reset to unresolved successfully');
        } else  if ($action == 'resolve') {
            // dd("resolve");
            $this->updateStatus($id, '1');
            return back()->with('success', 'Comment status resolved successfully');
        } else {
            dd("not found action");
        }
    }
    public function destroyComment($id)
    {
        RevisionPlanComment::find($id)->delete();
    }
    public function updateStatus($id, $stat)
    {
        $rev = RevisionPlanComment::where('id', $id)->first();
        // dd($rev);
        $rev->comment_status = $stat;
        $rev->save();
    }
    public function updateComment(Request $request, $id)
    {
        // dd($request->params['reply']);
        // dd($id);
        $request->validate([
            'params.reply' => 'required',
        ]);
        $comment = RevisionPlanComment::find($id);
        // dd(auth()->user()->UserName);

        // dd($comment);
        if ($comment) {
            $uname = trim(auth()->user()->FullName);
            $reply = $comment->reply;
            $concat = $reply . ' <b>' . $uname . '</b> replied: <i>' . $request->params['reply'] . '</i><br><br>';
            $comment->reply = $concat;
            $comment->save();
            return back()->with('success', 'Comment updated successfully.');
        } else {
            return back()->withErrors(['error' => 'Comment not found.']);
        }
    }
}
