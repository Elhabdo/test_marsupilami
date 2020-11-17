import { Component, OnInit } from '@angular/core';
import { MyservicesService } from 'src/app/services/myservices.service';

@Component({
  selector: 'app-moncompte',
  templateUrl: './moncompte.component.html',
  styleUrls: ['./moncompte.component.css']
})
export class MoncompteComponent implements OnInit {
  me:any=0;
  constructor(private ser:MyservicesService) { }

  ngOnInit(): void {
    this.getcompte();
  }
  getcompte(){
    this.ser.getbyname("Pilami").subscribe(res=>{
      this.me=res;
    })
  }
}
