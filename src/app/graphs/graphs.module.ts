import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { GraphsRoutingModule } from './graphs-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { GraphBarComponent } from './components/graph-bar/graph-bar.component';



@NgModule({
  declarations: [
    BarsComponent,
    DoubleBarsComponent,
    DonutComponent,
    DonutHttpComponent,
    HeaderComponent,
    GraphBarComponent
  ],
  imports: [
    CommonModule,
    GraphsRoutingModule,
    RouterModule,

    ChartsModule,
    SharedModule
  ]
})
export class GraphsModule { }
