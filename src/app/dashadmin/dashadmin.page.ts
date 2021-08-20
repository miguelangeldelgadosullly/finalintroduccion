import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ArtsService } from '../tab1/arts.service';
@Component({
  selector: 'app-dashadmin',
  templateUrl: './dashadmin.page.html',
  styleUrls: ['./dashadmin.page.scss'],
})
export class DashadminPage implements OnInit {


  arts=[]
  
  
  
  
  
    constructor(private artService: ArtsService) {
  
  
    }
  
  
  
  ngOnInit(){
  
  this.arts = this.artService.getArts()
  
  }
  
  }
  