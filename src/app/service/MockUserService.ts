import { of } from "rxjs";
import { UserData } from "../search/search.component";

export class MockUserService {

    getAllUsers() {
        return of([{
            "user_id": 13,
            "user_name": "1",
            "first_name": "1",
            "last_name": "1",
            "email": "1@gmail.com",
            "user_status": "T",
            "department": "1"
        },
        {
            "user_id": 14,
            "user_name": "2",
            "first_name": "2",
            "last_name": "2",
            "email": "2@gmail.com",
            "user_status": "A",
            "department": "2"
        }]);
    }

    CreateUser(userData: UserData){
        return of();
    }

    UpdateUser(userData: UserData){
        return of();
    }

    DeleteUser(userid: number){
        return of();
    }
}