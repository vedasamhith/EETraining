import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserData } from '../search/search.component';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient) { }

    BaseUrl = 'http://localhost:4000/Users/';

    getAllUsers() {
        return this.http.get<UserData[]>(this.BaseUrl + 'GetAll');
    }
    CreateUser(userData: UserData) {
        return this.http.post<UserData>(this.BaseUrl + 'Create', userData);
    }

    UpdateUser(userData: UserData) {
        return this.http.put<UserData>(this.BaseUrl + 'Update', userData);
    }

    DeleteUser(userid: number) {
        return this.http.delete(this.BaseUrl + 'Delete/' + userid);
    }
}