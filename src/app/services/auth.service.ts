import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
const TOKEN_KEY = 'user-acces-token';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
user: Observable<any>;
private authState= new BehaviorSubject(null);
  constructor(private storage : Storage, private router: Router) {
this.LoadUser();
this.user = this.authState.asObservable().pipe(
filter(response =>response)



);


   }

   LoadUser(){

this.storage.get(TOKEN_KEY).then(data=>{

if (data) {
  this.authState.next(data);
} else {
  this.authState.next({email:null, role:null})


}



});





   }

SignIn(credentials):Observable<any>{

let email= credentials.email;
let pw = credentials.pw;
let user = null;



if (email === 'admin'&& pw === 'admin'){
  user ={email, role :'ADMIN'};
}else if(email === 'user'&& pw === 'user'){
  user ={email, role :'USER'};

}


this.authState.next(user);
this.storage.set(TOKEN_KEY, user);


return of(user);
}
async SignOut(){

  await this.storage.set(TOKEN_KEY, null);
  this.authState.next(null);
  this.router.navigateByUrl('/login');

}
}
