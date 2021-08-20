import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ArtsService } from '../arts.service';
import { art } from './art.model';
@Component({
  selector: 'app-art-details',
  templateUrl: './art-details.page.html',
  styleUrls: ['./art-details.page.scss'],
})
export class ArtDetailsPage implements OnInit {


  art:art
  constructor(private activatedRoute: ActivatedRoute, private artsService : ArtsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap =>{

const recipeId=paraMap.get('artid')
this.art = this.artsService.getArt(recipeId);
    })



  }




}
