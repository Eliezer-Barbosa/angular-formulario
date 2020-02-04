import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  profissoes = ['Programador', 'Analista', 'Arquiteto', 'Outra'];
  profissao = 'Outra';

  salvar(form: NgForm) {
    console.log(this.profissao);
    console.log(form.value.profissao);
  }

}
