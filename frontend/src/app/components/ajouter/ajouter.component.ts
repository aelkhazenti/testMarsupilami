import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pilami } from 'src/app/models/pilami';
import { MyservicesService } from 'src/app/services/myservices.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  register:Pilami ={
    id:0,
    nom:"",
    password:"",
    nourriture:"",
    age:0,
    race:"",
    famille:""
  };
  constructor(private myserv:MyservicesService,private route : Router) { }

  ngOnInit(): void {
  }

  inscreption(){
    this.myserv.addNew(this.register).subscribe(res=>{
      console.log("added");
      this.route.navigate(['/login']);

    },err=> console.log(err))
  }

}
