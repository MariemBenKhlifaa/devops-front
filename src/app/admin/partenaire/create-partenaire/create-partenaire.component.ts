import { Component , OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-create-partenaire',
  templateUrl: './create-partenaire.component.html',
  styleUrls: ['./create-partenaire.component.css']
})
export class CreatePartenaireComponent implements  OnInit{
  @Input() openModel : boolean =true;

  ngOnInit(): void {
   console.log("aaaaaaaaaaaaaaaaaaaaaa")
  }
}
