import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProgressPage } from './progress.page';
import {ChartsModule} from 'ng2-charts'

const routes: Routes = [
  {
    path: '',
    component: ProgressPage
  }
];

@NgModule({
  imports: [
    ChartsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProgressPage]
})
export class ProgressPageModule {}
