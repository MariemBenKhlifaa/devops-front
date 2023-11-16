import { Component , OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-sous-categories',
  templateUrl: './sous-categories.component.html',
  styleUrls: ['./sous-categories.component.css']
})
export class SousCategoriesComponent implements OnInit{
  @Input() openModel : boolean =true;
  partenaire:boolean=false;
  ngOnInit(): void {
    
  }
  affiche_partenairelist(){
   this.partenaire=true;
  }
}
