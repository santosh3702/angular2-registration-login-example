﻿import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {LoginResponce} from "../_models/LoginResponce";

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    /*login(username: string, password: string) {


        return this.http.post('http://localhost:8080/movieService/login', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }*/

    login(username: string, password: string) : Observable<any>{

        var obj = { "userName":username, "password":password};
        var myJSON = JSON.stringify(obj);
        return this.http.post('http://localhost:8080/movieService/',myJSON)
            .map(response => <LoginResponce> response.json());
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}