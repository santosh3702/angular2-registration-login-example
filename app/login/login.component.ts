import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import {LoginResponce} from "../_models/LoginResponce";
import createExportDeclaration = ts.createExportDeclaration;
import {var1, var2} from '../variables/_variables';


@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})



export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    loginResponce: LoginResponce =new LoginResponce();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                 data => {
                    //this.router.navigate(['register']);

                    //console.log(data)

                    if(data.userName=='admin'){
                        this.router.navigate(['admin']);
                    }else{
                        if(data.userName!=null && data.status == 'ACTIVE'){

                            this.loginResponce.status=data.status;
                            this.loginResponce.userName=data.userName;
                            console.log(this.loginResponce.userName);
                            this.router.navigate(['home']);
                            var1=this.loginResponce.userName;
                        }
                        if(data.userName!=null && data.status == 'DEACTIVE'){
                            this.alertService.error("Contact to admin to activate");
                            this.router.navigate(['login']);
                        }
                        if(data.userName!=null && data.status == 'NOTEXIST') {
                            this.router.navigate(['login']);
                            this.alertService.error("USER IS NOT EXIST");

                        }
                    }

                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });


    }
}
