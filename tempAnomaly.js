import Chart from 'chart.js/auto'
import { Colors } from 'chart.js';
import data from './temperature-anomaly.json';

const c = document.getElementById("tempAnomaly");
const ctx = c.getContext("2d");

// Create linear gradient
const grad=ctx.createLinearGradient(100, 0, 0, 600);
grad.addColorStop(0, "#ff0000");
grad.addColorStop(1, "#ffffff"); 

(async function() {
  new Chart(document.getElementById('tempAnomaly'), {
      type: 'line',
      options: {
        responsive: true,
        maintainAspectRatio: false,
        pointStyle: false,
        tension: 0.5,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'AVERAGE TEMPERATURE ANOMALY',
            color: '#ffffff',
            fullSize: false,
            font: {
              family: "Bebas Neue",
              size: 25
            },
          }
        },
        scales: {
          y: {
            title: {
              display: 'true',
              text: 'DEGREES CELCIUS',
              color: '#ffffff',
              font: {
                family: "Bebas Neue",
                size: 15
              },
            },
            ticks: {
              color: '#ffffff'
            },
            grid: {
              display: false,
            }
          },
          x: {
            title: {
              text: 'YEAR',
              display: true,
              color: '#ffffff',
              font: {
                family: "Bebas Neue",
                size: 15
              }
            },
            ticks: {
              color: '#ffffff',
              font: {
                family: "Bebas Neue",
                size: 10
              }
            }
          }
        }
      },
      data: {
        labels: data.map(row => row['Year']),
        datasets: [
          {
            label: 'Average Temperature Anomaly, Global',
            data: data.map(row => row['Global average temperature anomaly relative to 1961-1990']),
            borderColor: grad,
            pointBackgroundColor: '#ffffff',
            
          }
        ]
      }
    }
  );
})();
