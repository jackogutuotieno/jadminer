<template>
  <div class="barChart">
    <apexchart 
      width="100%" type="bar" :options="options" :series="series">
    </apexchart>  
  </div>
</template>
<script>
export default {
  data: () => ({
    series: [{
      data: [40, 50, 80]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 200
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['High', 'Medium', 'Low'],
      },
    },
  })
}
</script>
