<template>
  <div>
    <apexchart 
      width="100%" type="area" :options="options" :series="series">
    </apexchart>  
  </div>
</template>
<script>
export default {
  data: () => ({
    options: {
      chart: {
        id: 'noOfCalls',
        title: {
          text: "Chart one"
        }
      },
      xaxis: {
        categories: [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Oct",
         "Nov",
         "Dec"
        ]
      }
    },
    series: [{
      title: 'No of Calls',
      name: 'series-1',
      data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139]
    }]
  })
}
</script>
