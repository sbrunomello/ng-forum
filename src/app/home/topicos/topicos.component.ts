import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-topicos',
  templateUrl: './topicos.component.html',
  styleUrls: ['./topicos.component.css']
})
export class TopicosComponent implements OnInit {

  constructor(private httpClient : HttpClient) {}

  ngOnInit(): void {

    this.httpClient.get('portal/logout').pipe(map(res => {
        console.log('deu bom')
    })).subscribe(res => {});
  }

}
