import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pilami } from '../models/pilami';

@Injectable({
  providedIn: 'root'
})
export class MyservicesService {
  constructor(private httpClient: HttpClient) {
    
   }
   
   getAll(){
     return this.httpClient.get("http://localhost:3000/marsupilamis");
   }
   
   addNew(data:any){
     return this.httpClient.post("http://localhost:3000/marsupilamis",data);
   }
   deleteId(id:number){
    return this.httpClient.delete("http://localhost:3000/marsupilamis/"+id);
   }
   loggin(data:Pilami){
    return this.httpClient.post("http://localhost:3000/login",data);
  }
  addfriend(data:any){
    return this.httpClient.post("http://localhost:3000/ami",data);

  }
  getbyname(name:string){
    return this.httpClient.get("http://localhost:3000/marsupilamis/"+name);

  }
}
