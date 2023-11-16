import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
   loggedin?:Boolean;
  constructor(private router: Router) { 
    this.loggedin=false;
  }

  ngOnInit(): void {
    
  }
  login(){
    this.router.navigate(['/admin/dashboard']);
  }

}
