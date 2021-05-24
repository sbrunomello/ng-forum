import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Topico } from '../shared/models/topico';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topicos: Topico[] = [];

  constructor(private servico: HomeService) { }

  ngOnInit(): void {
    debugger
    this.servico.listar().subscribe(dados => {
      console.log(dados);
    });
    console.log(this.topicos)
  }

}
