import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';

@Component({
  selector: 'app-double-bars',
  templateUrl: './double-bars.component.html',
  styleUrls: ['./double-bars.component.scss']
})
export class DoubleBarsComponent implements OnInit {

  labels1 = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
  type1: ChartType = 'horizontalBar';
  barChartLegend1:boolean = true;
  barChartData1: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#208aae' },
    { data: [59, 48, 56, 19, 40, 27, 90], label: 'Series B', backgroundColor: '#60492c' },
    { data: [40, 48, 40, 59, 86, 27, 56], label: 'Series C', backgroundColor: '#0d2149' }
  ];

  labels2 = ['2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  type2: ChartType = 'bar';
  barChartLegend2:boolean = false;
  barChartData2: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#208aae' },
    { data: [59, 48, 56, 19, 40, 27, 90], label: 'Series B', backgroundColor: '#60492c' },
    { data: [40, 48, 40, 59, 86, 27, 56], label: 'Series C', backgroundColor: '#0d2149' },
    { data: [65, 16, 80, 81, 69, 63, 40], label: 'Series D', backgroundColor: '#208aae' }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
