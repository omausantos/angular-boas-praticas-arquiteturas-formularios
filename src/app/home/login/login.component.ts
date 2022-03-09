import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: string = '';
  public senha: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  login(): void {
    console.log(`Usuário: ${this.usuario}`, `Senha: ${this.senha}`);
  }

}
