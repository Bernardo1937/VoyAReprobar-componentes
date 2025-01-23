import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/angular';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {
      console.log('Hola Mundo');

      let numero = 0;
      

      numero = 5;
      numero = 7;
      numero = numero*3;

      console.log('Va a haber evento canonico parte 2')
      
  }
}
