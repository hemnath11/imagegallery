import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormArray, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { ApicallsService } from '../../services/apicalls.service';

@Component({
  selector: 'app-viewuserphotos',
  templateUrl: './viewuserphotos.component.html',
  styleUrls: ['./viewuserphotos.component.css']
})
export class ViewuserphotosComponent implements OnInit {
	id: any;
	Photoslist = [];
  
  constructor(public location: Location, public service: ApicallsService,private route: ActivatedRoute, public router:Router) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
       this.id = params['id']; 
       console.log(this.id);
    });

     this.service.getphotos(this.id).subscribe(photos => {
    	console.log('photos',photos)
    	this.Photoslist = photos;
    })
  }

  back() {
  	this.location.back();
  }

}
