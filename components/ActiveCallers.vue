<template>
    <ActiveCallers :startVal='startVal' :endVal='endVal' :duration='3000'></ActiveCallers>
</template>
 
<script>
  import ActiveCallers from 'vue-count-to';
  export default {
    components: { ActiveCallers},
    data () {
      return {
        startVal: 0,
        endVal: 100
      }
    }
  }
</script>