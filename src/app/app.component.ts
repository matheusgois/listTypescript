import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dados1: Array<any> = ['um','dois','tres','quatro','cinco'];
  dados2: Array<any> = ['ator','novela','navalha','rei','mafioso'];
  tenta: any;
  inserido: Array<any> = [];
  removido: Array<any> = [];

  constructor(){
  }

  onetotwo(i) {
    const tenta = this.dados1.splice(i, 1);
    this.dados2.push(tenta);
    this.inserido.push(tenta);
  }

  twotoone(i) {
    const tenta = this.dados2.splice(i, 1);
    this.dados1.push(tenta);
    this.removido.push(tenta);
  }

  verification(){
    console.log("valores inseridos de A -> B: ", this.inserido);
    console.log("valores remodivod de B <- A: ", this.removido);
  }
}
