import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
