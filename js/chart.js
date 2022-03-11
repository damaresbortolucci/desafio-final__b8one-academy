const DISPLAY = false;
const BORDER = false;
const CHART_AREA = false;
const TICKS = true;


const labels = [
  '06/10/21',
  '07/10/21',
  '08/10/21',
  '09/10/21',
  '10/10/21',
  '11/10/21',
  '12/10/21',
];

const data = {
  labels: labels,
  datasets: [{
    /* verde */
    backgroundColor: 'transparent',
    borderColor: '#158F2E',
    data: [0, 60, 55, 100, 105, 120, 140]
    },{
      /* amarelo */
    backgroundColor: '#FFBE00',
    borderColor: '#FFBE00',
    data: [0, 40, 70, 50, 75, 130, 25]
    },{
      /* azul */
    backgroundColor: '#425DC7',
    borderColor: '#425DC7',
    data: [0, 50, 80, 55, 120, 80, 90]
  },{
    /* red */
    backgroundColor: '#F03460',
    borderColor: '#F03460',
    data: [0, 52, 32, 15, 50, 72, 10]
  }]
};

const data2 = {
  labels: labels,
  datasets: [{
    /* verde */
    backgroundColor: '#425DC7',
    borderColor: '#425DC7',
    data: [0, 60, 55, 100, 105, 120, 140],
    }]
};



const data3 = {
  labels: labels,
  datasets: [{
    /* verde */
    backgroundColor: 'transparent',
    borderColor: '#158F2E',
    data: [0, 60, 55, 105, 105, 120, 140]
    },{
      /* azul */
    backgroundColor: '#425DC7',
    borderColor: '#425DC7',
    data: [0, 22, 80, 55, 100, 80, 90]
  },{
    /* red */
    backgroundColor: '#F03460',
    borderColor: '#F03460',
    data: [0, 50, 32, 15, 50, 72, 10]
  }]
};




const config = {
  type: 'line',
  data: data,
  
  options: {
    responsive: true,
    scales:{
      x: {
        grid: {
          display: DISPLAY,
          drawBorder: BORDER,
          drawOnChartArea: CHART_AREA,
          drawTicks: TICKS,
        }
      },
      y:{
        min: 0,
        max: 150,
          ticks: {
            stepSize: 50,
          },
            grid: {
              drawBorder: BORDER,
            }
      }
    },
    plugins: {
      legend: {
          display: false,
        }
    }
  }
};



const myChart = new Chart(
  document.getElementById('myChart'),
  config
 
);





const config2 = {
  type: 'line',
  data: data2,
  
  options: {
    responsive: true,
    scales:{
      x: {
        grid: {
          display: DISPLAY,
          drawBorder: BORDER,
          drawOnChartArea: CHART_AREA,
          drawTicks: TICKS,
        }
      },
      y:{
          min: 0,
          max: 150,
            ticks: {
              stepSize: 50,
            },
            grid: {
              drawBorder: BORDER,
            }
      }
    },
    plugins: {
      legend: {
          display: false,
        }
    }
  }
};


const chartPedidos = new Chart(
  document.getElementById('chartPedidos'),
  config2
 
);


const config3 = {
  type: 'line',
  data: data3,
  
  options: {
    responsive: true,
    scales:{
      x: {
        grid: {
          display: DISPLAY,
          drawBorder: BORDER,
          drawOnChartArea: CHART_AREA,
          drawTicks: TICKS,
        }
      },
      y:{
          min: 0,
          max: 150,
            ticks: {
              stepSize: 50,
            },
            grid: {
              drawBorder: BORDER,
            }
      }
    },
    plugins: {
      legend: {
          display: false,
        }
    }
  }
};

const actions = 
  {
    name: 'Alignment: start',
    handler(chart) {
      chart.options.scales.x.ticks.align = 'start';
      chart.update();
    }
  }

const chartRevendedores = new Chart(
  document.getElementById('chartRevendedores'),
  config3
 
);