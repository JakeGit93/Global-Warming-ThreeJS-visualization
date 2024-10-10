import Chart from 'chart.js/auto'
import { Colors } from 'chart.js';
import data from './temperature-anomaly.json';

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
            color: '#000000',
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
              color: '#000000',
              font: {
                family: "Bebas Neue",
                size: 25
              },
            },
            ticks: {
              color: '#000000'
            },
            grid: {
              display: false,
            }
          },
          x: {
            title: {
              text: 'YEAR',
              display: true,
              color: '#000000',
              font: {
                family: "Bebas Neue",
                size: 25
              }
            },
            ticks: {
              color: '#000000',
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
            borderColor: '#ff0000',
            pointBackgroundColor: '#ffffff',
            
          }
        ]
      }
    }
  );
})();
