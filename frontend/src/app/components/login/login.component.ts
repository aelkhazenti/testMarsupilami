import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pilami } from 'src/app/models/pilami';
import { Globals } from 'src/app/services/globals';
import { MyservicesService } from 'src/app/services/myservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private ser:MyservicesService,private route : Router,private glb:Globals) { }
  mylogin:Pilami = {
    age:1,
    famille:"",
    id:0,
    nom:"",
    nourriture:"",
    password:"",
    race:""

  };
  ngOnInit(): void {
  }
  login(){
    console.log(this.mylogin);
    this.ser.loggin(this.mylogin).subscribe(res=>{
      if(res==true){
        console.log(res);
        this.glb.connected = true;
        this.route.navigate(['/']);
        this.getcurrentuser();
      }
    },err=>{
      console.log(err)
    })
  }
  getcurrentuser(){
    this.ser.getbyname(this.mylogin.nom).subscribe(
      res=>{
        this.glb.currentuser=res;
        console.log(this.glb.currentuser);

      }
    )
  }
}
