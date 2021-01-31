import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Globals } from 'src/app/services/globals';
import { MyservicesService } from 'src/app/services/myservices.service';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css']
})
export class CarnetComponent implements OnInit {
  carnet : any;
  
  constructor(private serv:MyservicesService,private glb:Globals,private router :Router) { }

  ngOnInit(): void {
    this.remplirCarnet();
  }
  remplirCarnet(){
    this.serv.getAll().subscribe(res=>{
      this.carnet = res;
    },err=> console.log(err))
  }
  addami(id:number){
    var currid = this.glb.currentuser[0].id;
    var data = {
      idconn: currid,
      idami: id
    }
    console.log(data);
    this.serv.addfriend(data).subscribe(res=>{
      this.router.navigate(['/amis']);
    });
  }
}
