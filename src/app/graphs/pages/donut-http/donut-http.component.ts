import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraphService } from '../../services/graph.service';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styleUrls: ['./donut-http.component.scss']
})
export class DonutHttpComponent implements OnInit {
    // Doughnut
    public doughnutChartLabels: Label[] = [];
    public doughnutChartData: MultiDataSet = [];
    public doughnutChartType: ChartType = 'doughnut';
    loader:boolean = false;
  
    public colors: Color[] = [
      {
        backgroundColor: [
          '#463f1a',
          '#60492c',
          '#f9ebe0',
          '#208aae',
          '#0d2149'
        ]
      }
    ]
  
    constructor(private graphService:GraphService) { }
  
    ngOnInit(): void {
      this.graphService.getData().subscribe({
        next: ({labels,data}) => {
          this.doughnutChartLabels = labels;
          this.doughnutChartData = data;
          this.loader = true;
        }
      });
    }
  
    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

}
