<template>
    <CallAgents :startVal='startVal' :endVal='endVal' :duration='3000'></CallAgents>
</template>
 
<script>
  import CallAgents from 'vue-count-to';
  export default {
    components: { CallAgents},
    data () {
      return {
        startVal: 0,
        endVal: 2017
      }
    }
  }
</script>