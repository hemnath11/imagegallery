import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ApicallsService {
	url = 'https://jsonplaceholder.typicode.com/';
  constructor(public http: Http) { }

  getusers() {
  	return this.http.get(this.url + 'users').map(res => { return res.json()}).catch(err => {return err.json()});
  }

  getalbum(uid) {
  	return this.http.get(this.url + 'albums?userId=' + uid).map(res => { return res.json()}).catch(err => {return err.json()});	
  }

  getphotos(aid) {
  	return this.http.get(this.url + 'photos?albumId=' + aid).map(res => { return res.json()}).catch(err => {return err.json()});	
  }
}
