import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit{
  addModal?:boolean=false;
  addmodaloffre?:boolean=false;
  constructor() { 
   
  }
 
  ngOnInit(): void {
   
  }
 
 
  openModal(){
   this.addModal=true;
   console.log(this.addModal)
  }
  openModaloffre(){
    this.addmodaloffre=true;
    console.log(this.addModal)
   }
}
