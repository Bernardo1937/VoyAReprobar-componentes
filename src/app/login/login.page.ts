import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone : false,
})
export class LoginPage implements OnInit {

  email : String = ''
  password : String;
  constructor(   private navController : NavController) {
    this.password = ''
   }

  ngOnInit() {
  }
  login( form : NgForm){
    /*console.log('email: ' this.email);
    console.log ('Password: ', this.password) */
    console.log(form.value);

    //validar formulario
    console.log('valid: ',form.valid);

    if(form.invalid){
      console.log("Todos los campos son requeridos");
      return;
    } 

    if (this.email === 'admin' && this.password === 'admin'){
      console.log("login correcto");
    } else {
      console.log("login Correcto")
    }
  }

}
