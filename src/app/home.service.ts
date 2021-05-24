import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Topico } from './shared/models/topico';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly url = 'https://xforum-api.herokuapp.com/topicos';
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get(this.url);
    }
}
