<template>
  <client-only>
      <bar-chart :data="chartData"></bar-chart>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Number of Orders',
            backgroundColor: '#CC99CC',
            data: [40, 20, 38, 60, 51, 72, 90, 65, 45, 33, 93, 22]
          }
        ]
      }
    };
  }
}
</script>