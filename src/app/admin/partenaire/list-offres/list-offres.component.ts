import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-list-offres',
  templateUrl: './list-offres.component.html',
  styleUrls: ['./list-offres.component.css']
})
export class ListOffresComponent {
  @Input() openModeloffre : boolean =true;
}
