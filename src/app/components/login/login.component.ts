import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'traktotv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email: String = "";
  senha: String = "";

  //email: String = "darthvader@gmail.com";
  //senha: String = "darthvader666";

  
  ngOnInit(): void {
    
  }

  Entrar(): void {
    
    if(this.email === "darthvader@gmail.com" && this.senha === "darthvader666" ) {
      // alert(this.email + " | "+ this.senha)
      window.location.href='/start'
    }else {
      alert("* Senha e/ou E-mail inválidos, por favor tente novamente!")
      window.location.reload();
    }
  }


}
