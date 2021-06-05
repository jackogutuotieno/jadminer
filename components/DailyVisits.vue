<template>
    <DailyVisits :startVal='startVal' :endVal='endVal' :duration='3000'></DailyVisits>
</template>
 
<script>
  import DailyVisits from 'vue-count-to';
  export default {
    components: { DailyVisits},
    data () {
      return {
        startVal: 0,
        endVal: 2000
      }
    }
  }
</script>