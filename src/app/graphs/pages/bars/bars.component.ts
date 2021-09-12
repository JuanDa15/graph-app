import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styles: [``]
})

export class BarsComponent implements OnInit {

  constructor() { }

  labels:Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012']
  type: ChartType = 'bar';
  barChartLegend:boolean = true;
  barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#208aae' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [59, 48, 56, 19, 40, 27, 90], label: 'Series C', backgroundColor: '#60492c' },
    { data: [40, 48, 40, 59, 86, 27, 56], label: 'Series C', backgroundColor: '#0d2149' }
  ];

  ngOnInit(): void {
  }
}
