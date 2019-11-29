import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, MultiDataSet, BaseChartDirective, Color } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      labels: { fontColor: '#adb5bd' }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{
        ticks: { fontColor: '#adb5bd' }
      }],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          ticks: {
            fontColor: '#adb5bd',
          }
        }
      ]
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      labels: { fontColor: '#adb5bd' }
    }
  };
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  results = [
    {
      "name": "Statistics",
      "series": [
        {
          "name": "2010",
          "value": 20
        },
        {
          "name": "2011",
          "value": 46
        },
        {
          "name": "2012",
          "value": 62
        },
        {
          "name": "2013",
          "value": 74
        },
        {
          "name": "2014",
          "value": 52
        },
        {
          "name": "2015",
          "value": 28
        },
        {
          "name": "2016",
          "value": 110
        },
        {
          "name": "2017",
          "value": 36
        }
      ]
    }
  ];
  
  pieChart = [
      {
        "name": "2010",
        "value": 8
      },
      {
        "name": "2011",
        "value": 20
      },
      {
        "name": "2012",
        "value": 24
      },
      {
        "name": "2013",
        "value": 36
      },
      {
        "name": "2014",
        "value": 6
      }];

  lineChart = [{
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 8
      },
      {
        "name": "2011",
        "value": 20
      },
      {
        "name": "2012",
        "value": 24
      },
      {
        "name": "2013",
        "value": 36
      },
      {
        "name": "2014",
        "value": 6
      }
    ]
  },
  {
    "name": "Germany2",
    "series": [
      {
        "name": "2010",
        "value": 14
      },
      {
        "name": "2011",
        "value": 19
      },
      {
        "name": "2012",
        "value": 16
      },
      {
        "name": "2013",
        "value": 44
      },
      {
        "name": "2014",
        "value": 8
      }
    ]
  }];

  chartDonutOptions = {
    colors: ["red", "green", "blue"]
  };

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    legend: {
      labels: { fontColor: '#adb5bd' }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{
        ticks: { fontColor: '#adb5bd' }
      }],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          ticks: {
            fontColor: '#adb5bd',
          }
        },
        {
          id: 'y-axis-1',
          position: 'right',
          ticks: {
            fontColor: '#adb5bd',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: '#323a46',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: '#323a46',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: '#323a46',
      borderColor: '#ad526b',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor() { }

  ngOnInit() {
  }

}
