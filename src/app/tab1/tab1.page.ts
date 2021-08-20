import { Component, OnInit } from '@angular/core';
import {ArtsService} from './arts.service'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


arts=[]





  constructor(private artService: ArtsService) {


  }



ngOnInit(){

this.arts = this.artService.getArts()

}

}
