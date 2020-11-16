import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MyservicesService } from 'src/app/services/myservices.service';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css']
})
export class CarnetComponent implements OnInit {
  carnet : any;
  
  constructor(private serv:MyservicesService) { }

  ngOnInit(): void {
    this.remplirCarnet();
  }
  remplirCarnet(){
    this.serv.getAll().subscribe(res=>{
      this.carnet = res;
    },err=> console.log(err))
  }
  delete(id:number){
    this.serv.deleteId(id).subscribe(res=>{
      this.remplirCarnet();
    },err=> console.log(err))
  }
}
