import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graph-bar',
  templateUrl: './graph-bar.component.html',
  styleUrls: ['./graph-bar.component.scss']
})
export class GraphBarComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  @Input() barChartLabels!:Label[];
  @Input() barChartType!: ChartType;
  @Input() barChartLegend!:boolean;
  @Input() barChartData!: ChartDataSets[];

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {

    this.barChartData.forEach( (x)=> {
      let data = x.data;
      let newData;

      newData = data?.map( (x:any)=> {
        return x = Math.round(Math.random() * 100);
      })

      x.data = newData;
    })
  }
}
