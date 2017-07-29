import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormArray, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ApicallsService } from '../../services/apicalls.service'

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {
	id: any;
	albumlist = [];
  constructor(public service: ApicallsService,private route: ActivatedRoute, public router:Router) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
       this.id = params['id']; 
       console.log(this.id);
    });

    this.service.getalbum(this.id).subscribe(album => {
    	console.log('album',album)
    	this.albumlist = album;
    })
  }

  viewalbum(id) {
  	this.router.navigate(['/viewuserphotos', id]);
  }

}
