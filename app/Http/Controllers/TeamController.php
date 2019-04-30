<?php

namespace App\Http\Controllers;

use App\Team;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;

class TeamController extends Controller
{
    /** Get the team that the currently logged in user is a part of
     *
     * @return \Illuminate\Http\JsonResponse the response
     */
    public function my_team()
    {
        $user = Auth::user();

        // Check that user is on a team
        if (!$user->team) {
            return;
        }

        // Find all the team members
        $team = Team::where('team_name', $user->team);
        $members = self::list_members($team->members);

        $my_team = [
            "team name" => $team->name,
            "members" => $members
        ];

        return response()->json($my_team, 200);
    }

    /** Lists all the teams and their members
     *
     * @return \Illuminate\Http\JsonResponse the response
     */
    public function list()
    {
        $teams = Team::all();

        $all_teams = [];
        foreach ($teams as $team) {
            $members = self::list_members($team->members);

            $all_teams[] =  [
                "name" => $team->team_name,
                "members" => $members
            ];
        }
        return response()->json([
            "All Teams" => $all_teams
        ], 200);
    }

    /** Currently logged in user joins a team. If the team doesn't already exist, it is created.
     *
     * @return \Illuminate\Http\JsonResponse the response
     */
    public function join(Request $request)
    {
        $name = $request->get('team_name');
        $team = Team::where('team_name', $name)->first();
        $user = Auth::user();


        // If user isn't already a part of a team
        if (!$user->team) {
            // Team doesn't exist yet, make new team and join it
            if (!$team) {
                $team = Team::create([
                    'team_name' => $name, // Make sure the team name is unique!!
                    'members' => array($user->id)
                ]);
                $user->team = $team->team_name;
                $user->save();
                return response()->json($team, 200);
            }

            // Join team if there are < 4 members and you're not already on it
            else if (count($team->members) < 4 && !in_array($user->id, $team->members)) {
                $new_members = $team->members;
                array_push($new_members, $user->id);
                $team->members = $new_members;
                $team->save();
                $user->team = $team;
                return response()->json($team, 200);
            }
        }
        return response()->json('Unable to join team.', 400);
    }

    /** Currently logged in user leaves a team. If the team has 0 members, it is deleted.
     *
     * @return \Illuminate\Http\JsonResponse the response
     */
    public function leave()
    {
        $user = Auth::user();

        // If the user is a part of a team, leave the team
        if ($user->team) {
            $team = Team::where('team_name', $user->team)->first();
            $new_members = $team->members;

            $key = array_search($user->id, $new_members);
            unset($new_members[$key]);
            $team->members = $new_members;
            $team->save();

            $user->team = null;
            $user->save();

            // If team has 0 members, delete it
            if (count($team->members) == 0) {
                $team->delete();
            }
        }
        return response()->json('Leaving team was successful.', 200);
    }

    /** Gets the names of all the members on a team
     *
     * @return string[]
     */
    private function list_members($member_ids) {
        $members_array = [];
        foreach ($member_ids as $member_id) {
            $user = User::where('id', $member_id)->first();
            array_push($members_array, $user->name());
        }
        return $members_array;
    }
}
