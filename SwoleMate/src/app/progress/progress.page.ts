import {
  Component,
  OnInit
} from '@angular/core';
import {
  ChartDataSets,
  ChartType,
  ChartOptions
} from 'chart.js';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  Goal: any[] = [{
    Name: "Arms",
    percentage: .6
  },
  {
    Name: "Long distance Running",
    percentage: .7
  },
  {
    Name: "Heathier",
    percentage: .3
  }
]
  constructor() {}



  public DChartLabels: string[] = ["Arms", "Legs", "Core", "Cardio"];
  public DChartData: Number[] = [30, 40, 60, 20];
  public DChartType: string = 'doughnut';

  public radarChartLabels: string[] = ["Arms", "Legs", "Core", "Heart"];
  public radarChartData: ChartDataSets[] = [{
      data: [65, 59, 90, 81],
      label: 'Last Month'
    },
    {
      data: [28, 48, 40, 19],
      label: 'This Month'
    }
  ]
  public radarChartType: string = 'radar';

   
  ngOnInit() {}

}