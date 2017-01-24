import {Component, OnInit} from "@angular/core";
import {LoginComponent} from  "../login/login.component"
import {userName} from "../variables/_variables";

/**
 * Created by grahul on 1/18/2017.
 */

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent {
    selectedUser :string;
    public recentMovie: String= "None";
    public cart :String[] = [];
    public  movieList: String[] = ['kaidhi150','batmanvsuperman','Civilwar'];
    loginComponent:LoginComponent;
    constructor(){
        this.selectedUser=userName;
    }

    selectedMovie(movie:String){
        this.recentMovie= movie;
        this.cart.push(movie);
        alert(movie +' movie was added to cart')
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

