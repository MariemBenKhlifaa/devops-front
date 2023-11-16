import { Operateur } from './../../models/Operateur';
import { Component, OnInit } from '@angular/core';
import { OperateurserviceService } from 'src/app/services/operateurservice.service';

@Component({
  selector: 'app-show-responsable',
  templateUrl: './show-responsable.component.html',
  styleUrls: ['./show-responsable.component.css']
})
export class ShowResponsableComponent implements OnInit{
  addModal?:boolean=false;
  ListOperateur:Operateur[]
  operateur:Operateur
  closedmodal:Boolean
  searchValue: string = '';

 constructor(private operateurservice:OperateurserviceService) {

 }

 ngOnInit(): void {
 this.getallResponsable()
 }
getallResponsable(){
  this.operateurservice.getOperateur().subscribe((data)=>{
    this.ListOperateur=data
    console.log(data)
  })
}
getid(responsable:any){
  this.operateur=responsable;

 }

deleteResponsable():void{
  let i = this.ListOperateur.indexOf(this.operateur);

  this.operateurservice.deleteOperateur(this.operateur.idOperateur).subscribe(data=>{

      this.ListOperateur.splice(i,1)

      this.closedmodal=true

  })

 }

 openModal(){
  this.addModal=true;
  console.log(this.addModal)
 }

}
