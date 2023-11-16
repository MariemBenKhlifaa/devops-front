import { HttpClient } from '@angular/common/http';
import { Component , OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { OperatorFunction } from 'rxjs';
import { Operateur } from 'src/app/models/Operateur';
import { OperateurserviceService } from 'src/app/services/operateurservice.service';

@Component({
  selector: 'app-create-responsable',
  templateUrl: './create-responsable.component.html',
  styleUrls: ['./create-responsable.component.css']
})
export class CreateResponsableComponent implements  OnInit{

  @Input() openModel : boolean =true;
  @Output() responsableAdded: EventEmitter<void> = new EventEmitter<void>();
  messageError:string


  constructor(private serviceOperateur:OperateurserviceService){}
  operateur:Operateur
  ngOnInit(): void {
    this.operateur = new Operateur()
   console.log("aaaaaaaaaaaaaaaaaaaaaa")
  }
  addOperateur(operateur:Operateur){
    this.serviceOperateur.addoperateur(operateur).subscribe(data=>{

      if(data){
        this.responsableAdded.emit();
       // this.responsablee=new Responsable()
      }

    }, error => {
      this.messageError=error.error.message
    })

  }
}
