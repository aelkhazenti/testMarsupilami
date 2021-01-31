import { Component, OnInit } from '@angular/core';
import { MyservicesService } from 'src/app/services/myservices.service';

@Component({
  selector: 'app-amis',
  templateUrl: './amis.component.html',
  styleUrls: ['./amis.component.css']
})
export class AmisComponent implements OnInit {

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
  deleteami(id:number){

  }
}
