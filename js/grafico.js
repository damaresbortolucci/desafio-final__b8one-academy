/* primeiro - GRAFICO DE VENDAS */

var optionsSales = {
  chart: {
    type: 'line',
    height: "238px",
  },
  colors:['#425DC7', '#F03460', '#FFBE00', '#158F2E'],
  series: [{
    name: 'Estornado',
    data: [0, 60, 55, 100, 105, 120, 140]
  },{
    name: 'Cancelado',
    data: [0, 40, 70, 50, 75, 130, 25]
  },
  {
    name: 'Não pago',
    data: [0, 50, 80, 55, 120, 80, 90]
  },
  {
    name: 'Pago',
    data: [0, 52, 32, 15, 50, 72, 10]
  },
],
  tooltip: {
    enabled: false,
  },
  stroke: {
    width: [2.5,2.5,2.5,2.5]
  },
  xaxis: {
    categories: [
      '06/10/21',
      '07/10/21',
      '08/10/21',
      '09/10/21',
      '10/10/21',
      '11/10/21',
      '12/10/21',
    ]
  },
  yaxis: {
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: '#000',
      width:50,
      offsetX: 0,
      offsetY: 1
    },
    tickAmount: 3,
    min: 0,
    max: 150,
    labels: {
      show: true,
      align: 'right',
      minWidth: 0,
      maxWidth: 160,
  },
  axisBorder: {
      show: false,
  },
  axisTicks: {
      show: true,
      borderType: 'solid',
      color: '#78909C',
      width: 0,
      offsetX: 0,
      offsetY: 0
    }
  }
}
var chartSales = new ApexCharts(document.querySelector("#chartSales"), optionsSales);
chartSales.render();



/* segundo - GRÁFICO DE PEDIDOS*/

var optionsOrder = {
  chart: {
    type: 'line',
    height: "323px",
  },
  colors:['#425DC7', 'transparent'],
  series: [{
    name: 'Total de pedidos',
    data: [0, 40, 70, 50, 75, 130, 25]
  },{
    name: '',
    data: []
  }],
  tooltip: {
    enabled: false,
  },
  stroke: {
    width: [2.5]
  },
  xaxis: {
    categories: [
      '06/10/21',
      '07/10/21',
      '08/10/21',
      '09/10/21',
      '10/10/21',
      '11/10/21',
      '12/10/21',
    ]
  },
  yaxis: {
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: '#000',
      width:50,
      offsetX: 0,
      offsetY: 1
    },
    tickAmount: 3,
    min: 0,
    max: 150,
    labels: {
      show: true,
      align: 'right',
      minWidth: 0,
      maxWidth: 160,
  },
  axisBorder: {
      show: false,
  },
  axisTicks: {
      show: true,
      borderType: 'solid',
      color: '#78909C',
      width: 0,
      offsetX: 0,
      offsetY: 0
    }
  }
}

var chartOrder = new ApexCharts(document.querySelector("#chartOrder"), optionsOrder);
chartOrder.render();



/*  terceiro - GRAFICO DE VENDEDORES */

var optionsSellers = {
  chart: {
    type: 'line',
    height: "291px",
    width: "100%"
  },
  colors:['#425DC7', '#158F2E', '#F03460'],
  series: [{
    name: 'Valor total de vendas',
    data: [0,100,120,50,100]
  },{
    name: 'Quantidade de pedidos',
    data: [0,55,110,55,80]
  },
  {
    name: 'Comissão a pagar',
    data: [0,90,30,44,30]
  }
],
  tooltip: {
    enabled: false,
  },
  stroke: {
    width: [2,2,2]
  },
  xaxis: {
    categories: [
      '06/10/21',
      '07/10/21',
      '08/10/21',
      '09/10/21',
      '10/10/21',
      '11/10/21',
      '12/10/21',
    ]
  },
  yaxis: {
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: '#000',
      width:50,
      offsetX: 0,
      offsetY: 1
    },
    tickAmount: 3,
    min: 0,
    max: 150,
    labels: {
      show: true,
      align: 'right',
      minWidth: 0,
      maxWidth: 160,
  },
  axisBorder: {
      show: false,
  },
  axisTicks: {
      show: true,
      borderType: 'solid',
      color: '#78909C',
      width: 0,
      offsetX: 0,
      offsetY: 0
    }
  }
}

var chartSellers = new ApexCharts(document.querySelector("#chartSellers"), optionsSellers);
chartSellers.render();