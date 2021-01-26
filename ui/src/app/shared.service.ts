import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000/"

  constructor(private http:HttpClient) { }

  getList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'list/');
  }
  addList(val:any){
    return this.http.post(this.APIUrl+'list/', val);
  }
  updateList(val:any){
    return this.http.put(this.APIUrl+'list/', val);
  }
  deleteList(val:any){
    return this.http.delete(this.APIUrl+'list/'+ val);
  }
}
