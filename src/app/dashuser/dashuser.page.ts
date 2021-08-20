import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-dashuser',
  templateUrl: './dashuser.page.html',
  styleUrls: ['./dashuser.page.scss'],
})
export class DashuserPage implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

SignOut(){
this.auth.SignOut();




}
}
