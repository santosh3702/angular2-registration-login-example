import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('http://localhost:8080/loginService/getAllUsers').map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('http://localhost:8080', user).map((response: Response) => response.json());
    }

    update(user: User) {

        return this.http.put('/api/users/' + user.id, user).map((response: Response) => response.json());
    }

    delete(username: string) {
        var obj = { "userName":username};
        return this.http.post('http://localhost:8080/loginService/delete',obj).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}