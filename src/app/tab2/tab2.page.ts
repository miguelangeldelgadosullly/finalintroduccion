import { Component, OnInit } from '@angular/core';
import { ArtsService } from '../tab1/arts.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  arts=[]
  
  
  
  
  
    constructor(private artService: ArtsService) {
  
  
    }
  
  
  
  ngOnInit(){
  
  this.arts = this.artService.getArts()
  
  }
  
  }

