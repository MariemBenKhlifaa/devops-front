import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operateur } from '../models/Operateur';

@Injectable({
  providedIn: 'root'
})
export class OperateurserviceService {

  constructor(private httpClient:HttpClient) { }
  getOperateur():Observable<any> {
    return this.httpClient.get("http://localhost:8089/SpringMVC/operateur/retrieve-all-operateurs")
  }

  addoperateur(operateur:Operateur){
    return this.httpClient.post('http://localhost:8089/SpringMVC/operateur/add-operateur',operateur)
  }

  deleteOperateur(operateur_id:any){
    return this.httpClient.delete('http://localhost:8089/SpringMVC/operateur/remove-operateur/'+operateur_id)
  }
}
