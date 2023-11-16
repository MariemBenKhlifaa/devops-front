import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  addModal?:boolean=false;
  addModalCreate?:boolean=false;
  constructor() { 
   
  }
 
  ngOnInit(): void {
   
  }
 
 
  openModal(){
   this.addModal=true;
   console.log(this.addModal)
  }
  openModalCreateCategory(){
    this.addModalCreate=true;
    
   }

}
