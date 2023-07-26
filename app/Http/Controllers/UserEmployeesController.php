<?php

namespace App\Http\Controllers;

use App\Models\UserEmployees;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class UserEmployeesController extends Controller
{
    protected $us_em;
    public function __construct(UserEmployees $us_em)
    {
        $this->us_em=$us_em;
    }
    public function index(Request $request){
        $data = $this->us_em->where('department_code',auth()->user()->department_code)->with('Division')
                ->paginate(10);
        return inertia('Users/Employees/Index',
        [
            "users"=>$data
        ]
        );
    }

    public function syncemployees(Request $request){
        $apiUrl = 'http://hris.dvodeoro.ph:91/api/ListOfEmployees4IPCR';

        // Initialize Guzzle HTTP client
        //$client = new Client();
        $data = [];
        try {
            // Initialize GuzzleHTTP client
            $client = new Client();

            // Make an HTTP POST request to the API URL
            $response = $client->post($apiUrl, [
                // If the API requires any specific data in the request body, you can add it here
                'form_params' => [
                    'key' => 'value',
                    // Add more parameters as needed
                ],
                // If the API requires headers or authentication, you can add them here
                'headers' => [
                    'Authorization' => 'Bearer YOUR_API_TOKEN', // Replace with your API token or credentials
                    // Add more headers if needed
                ],
            ]);

            // Get the JSON response from the API and decode it into an associative array
            $data = json_decode($response->getBody(), true);
            //dd($data);
            // Now $data contains the API response as an array, and you can process it as needed
            $length = count($data);
            for($i=0; $i<$length; $i++){
                $this->saveUserEmployees($data[$i]);
            }
            //dd($data[0]['department_code']);
            // For example, return the data using Inertia::render
            // return Inertia::render('YourComponent', [
            //     'data' => $data, // Pass the retrieved data to the view
            // ]);

        } catch (\Exception $e) {
            // Handle any errors that might occur during the API request
            return Inertia::render('ErrorView', [
                'message' => 'Failed to retrieve data from the API.',
            ]);
        }
        return redirect('/user/employees')
                ->with('message','Employee list synced successfully!');
        //dd("done");
    }
    public function saveUserEmployees($datum){
        $emplo = UserEmployees::where('empl_id', $datum['empl_id'])
                    ->get();
        //dd(count($emplo));
        if(count($emplo)<1){
            $emp = new UserEmployees;
            $emp->empl_id = $datum['empl_id'];
            $emp->password = md5('$password1');
            $emp->employee_name = $datum['employee_name'];
            $emp->last_name = $datum['last_name'];
            $emp->first_name = $datum['first_name'];
            $emp->middle_name = $datum['middle_name'];
            $emp->suffix_name = $datum['suffix_name'];
            $emp->postfix_name = $datum['postfix_name'];
            $emp->gender = $datum['gender'];
            $emp->birth_date = $datum['birth_date'];
            $emp->age = $datum['age'];
            $emp->department_code = $datum['department_code'];
            $emp->subdepartment_code = $datum['subdepartment_code'];
            $emp->division_code = $datum['division_code'];
            $emp->section_code = $datum['section_code'];
            $emp->position_code = $datum['position_code'];
            $emp->position_long_title = $datum['position_long_title'];
            $emp->position_short_title = $datum['position_short_title'];
            $emp->position_title1 = $datum['position_title1'];
            $emp->position_title2 = $datum['position_title2'];
            $emp->is_pghead = $datum['is_pghead'];
            $emp->salary_grade = $datum['salary_grade'];
            $emp->employment_type = $datum['employment_type'];
            $emp->employment_type_descr = $datum['employment_type_descr'];
            $emp->save();
        }

    }
}
