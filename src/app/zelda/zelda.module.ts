import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZeldaPageRoutingModule } from './zelda-routing.module';

import { ZeldaPage } from './zelda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZeldaPageRoutingModule
  ],
  declarations: [ZeldaPage]
})
export class ZeldaPageModule {}
