import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { LocalDataSource } from 'ng2-smart-table';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApicallsService } from '../../services/apicalls.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  	settings = {
    mode:"external",
    actions:{add:false,delete:false,position:'right'},
    edit: {
      editButtonContent: '<i class="fa fa-eye" aria-hidden="true"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent:'<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash" aria-hidden="true"></i>',
      confirmDelete: true
    },
    columns: {
       name:{
        title: "User Name",
        filter: true
       },
       email: {
        title: "Email",
        filter: true
      },
       phone: {
        title: "Phone",
        filter: true
      },
       website: {
        title: "website",
        filter: true
      }
    }
  };
  users: any;
  userslist = [];
  datausers: any;
  constructor(public service: ApicallsService, public router: Router) { }

  ngOnInit() {
  	this.service.getusers().subscribe(data => {
  		console.log('users', data);
  		this.users = data;
  		for(var i = 0; i < this.users.length; i++) {
  			this.userslist.push({
  				id:this.users[i].id,
  				name: this.users[i].name,
  				email:this.users[i].email,  				
  				phone:this.users[i].phone,
  				website:this.users[i].website

  			})
  		}

  		this.datausers = new LocalDataSource(this.userslist);
  	})
  }

  onEdit(event) {
  	var id = event.data.id;
  	this.router.navigate(['/viewuseralbum', id]);
  }

}
