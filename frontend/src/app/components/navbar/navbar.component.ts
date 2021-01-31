import { Component, OnInit } from '@angular/core';

import { Globals } from 'src/app/services/globals'
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  conn : boolean = false;
  constructor(private glb:Globals,private router : Router,private location: Location) {
    this.conn = this.glb.connected;

   }
  ngOnInit(): void {
    this.router.events.subscribe(val =>{
      if(this.location.path()==""){
        this.conn = this.glb.connected;
      console.log(this.conn);
      }
      
    })
  }
  decc(){
    this.glb.connected = false;
    console.log(this.glb.connected);
    this.router.navigate(['/login']);
  }

}
