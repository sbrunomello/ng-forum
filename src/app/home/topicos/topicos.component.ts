import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-topicos',
  templateUrl: './topicos.component.html',
  styleUrls: ['./topicos.component.css']
})
export class TopicosComponent implements OnInit {

  constructor(private http : HttpClient) {}

  ngOnInit(): void {
 //this.http.get('https://xforum-api.herokuapp.com/topicos');
  }

}
