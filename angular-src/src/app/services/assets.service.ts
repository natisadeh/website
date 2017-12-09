import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AssetsService {

  constructor(private http:Http) { }

  addAsset(asset){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('properties/property', JSON.stringify(asset),{headers: headers})
      .map(res => res.json());
  }

  getAssets(){
    return this.http.get('/properties/properties')
      .map(res => res.json())
  }

  deleteAsset(id){
    return this.http.delete('/properties/property/' +id)
      .map(res => res.json());
  }

  updateStatus(property){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('/api/task/' +property._id, JSON.stringify(property), {headers: headers})
      .map(res => res.json());
  }
}
