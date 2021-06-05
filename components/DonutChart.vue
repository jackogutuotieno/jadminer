<template>
  <div>
   <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>  
  </div>
</template>
<script>
export default {
  data: () => ({
          series: [44, 55, 13],
          chartOptions: {
            labels: ['Open', 'Closed', 'In Progress'],
            chart: {
              type: 'donut',
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                },
              }
            }]
          }
  }),
}
</script>
