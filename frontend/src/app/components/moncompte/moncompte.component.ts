import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/services/globals';
import { MyservicesService } from 'src/app/services/myservices.service';

@Component({
  selector: 'app-moncompte',
  templateUrl: './moncompte.component.html',
  styleUrls: ['./moncompte.component.css']
})
export class MoncompteComponent implements OnInit {
  me:any=0;
  constructor(private ser:MyservicesService,private glb:Globals) { }

  ngOnInit(): void {
    this.getcompte();
  }
  getcompte(){
    this.ser.getbyname(this.glb.currentuser.nom).subscribe(res=>{
      this.me=res;
    })
  }
}
