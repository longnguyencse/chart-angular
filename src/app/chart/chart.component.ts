import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  data: any;
  options: any;

  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        },
        {
          label: 'My third dataset',
          backgroundColor: '#f4424b',
          borderColor: '#f4424b',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
    this.options = {
      scales: {
        xAxes: [{

          stacked: true
        }],
        yAxes: [{
          stacked: true,
          ticks: {
            // min: 0,
            // max: 300,
            // stepSize: 50
          }
        }]
      }
    };
  }

  ngOnInit() {
  }

}
