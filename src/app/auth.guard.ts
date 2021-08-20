import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthService } from './services/auth.service';
import {take, map} from 'rxjs/operators'
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService, private alertCtrl: AlertController){}
  canActivate(route: ActivatedRouteSnapshot){
const expectedRole = route.data.role;



    return this.auth.user.pipe(

take(1),
map(user=>{
console.log('log:', user)
if (user) {
  let role = user ['role'];
  if (expectedRole == role) {
    return true;
  }
  else{
    return this.router.parseUrl('/login');


  }

} else {
    return this.router.parseUrl('/login');
  
}

})

    )
    
  }






  }
  

