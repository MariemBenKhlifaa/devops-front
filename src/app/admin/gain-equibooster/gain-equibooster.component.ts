import { Component ,AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-gain-equibooster',
  templateUrl: './gain-equibooster.component.html',
  styleUrls: ['./gain-equibooster.component.css']
})

export class GainEquiboosterComponent implements AfterViewInit {
  constructor(private location: Location) { 
  
  }
 
  ngAfterViewInit() {
   
    const ctx = document.getElementById('report-line-chart') as HTMLCanvasElement;
    const report = document.getElementById('report-donut-chart') as HTMLCanvasElement;
    const  piechart = document.getElementById('report-pie-chart') as HTMLCanvasElement;

    if (ctx || report || piechart) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Ventes',
            data: [120, 150, 200, 180, 220, 250],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          // Options du graphique
        }
      });
      new Chart(report, {
        type: 'pie',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Ventes',
            data: [120, 150, 200, 180, 220, 250],
           
          }]
        },
        options: {
          // Options du graphique
        }
      });
      new Chart(piechart, {
        type: 'pie',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Ventes',
            data: [120, 150, 200, 180, 220, 250],
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          // Options du graphique
        }
      });
    }

   else {
      console.error('Élément avec ID "report-line-chart" introuvable dans le DOM.');
    }
  }
   
  
 
}
