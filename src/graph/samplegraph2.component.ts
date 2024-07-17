import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-samplegraph2',
  templateUrl: './samplegraph2.component.html',
  styleUrls: ['./samplegraph2.component.scss']
})
export class Samplegraph2Component implements OnInit {

  chart: any;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
          label: 'Sample Data',
          data: [10,12,15,17,19,22,20,22,24,33,55,62],
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        aspectRatio:2
      }
    });
  }

}
