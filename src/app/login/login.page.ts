import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

user = {
email:'',
pw:''


};

  constructor( private auth:AuthService, private router: Router) { }

  ngOnInit() {
  }
SignIn(){


this.auth.SignIn(this.user).subscribe(user =>{
let role = user['role'];
if (role== 'ADMIN') {
  this.router.navigateByUrl('/dashadmin');

}else if (role == 'USER') {
  this.router.navigateByUrl('/dashuser');
}




});

}


}
