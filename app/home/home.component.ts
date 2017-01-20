import {Component, OnInit} from "@angular/core";
import {User} from "../_models/user";
import {UserService} from "../_services/user.service";
import  {userName} from "../login/login.component";
import {LoginResponce} from "../_models/LoginResponce";
import {var1, var2} from '../variables/_variables';
/**
 * Created by grahul on 1/18/2017.
 */

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent {
    localvar3 :string;
     constructor() {
         this.localvar3=var1;
    console.log(var1);

    }
   /* public recentMovie: String= "None";
    public cart :String[] = [];
    public  movieList: String[] = ['kaidhi150','batmanvsuperman','Civilwar'];

    selectedMovie(movie:String){
        this.recentMovie= movie;
        this.cart.push(movie);
        alert(movie +' movie was added to cart')
    }*/
}

