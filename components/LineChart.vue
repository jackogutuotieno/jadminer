<template>
  <client-only>
      <line-chart :data="chartData"></line-chart>
  </client-only>
</template>

<script>
export default {
  extends: Line,
  data: () => ({
    chartData: {
      labels: ['January', 'February'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 20]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>