import Chart from 'chart.js/auto'
import { Colors } from 'chart.js';
import data from './temperature-anomaly.json';

(async function() {
  new Chart(document.getElementById('tempAnomaly'), {
      type: 'line',
      options: {
        scales: {
          y: {
            title: {
              display: 'true',
              text: 'Degrees Celcius',
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
