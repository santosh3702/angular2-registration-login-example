import {Component, OnInit} from "@angular/core";
import {User} from "../_models/user";
import {UserService} from "../_services/user.service";
/**
 * Created by grahul on 1/18/2017.
 */
@Component({
    moduleId: module.id,
    templateUrl: 'admin.component.html'
})
export class AdminComponent implements OnInit{
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }


    deleteUser(username : string) {
        this.userService.delete(username).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

}