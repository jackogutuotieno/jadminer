<template>
  <div>
    <b-jumbotron class="mainHeader">
        <b-container>
            <h1>Calendar</h1>
        </b-container>
    </b-jumbotron>
    <b-container>
        <div>
            <Calendar />
        </div>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dismissSecs: 10,
        dismissCountDown: 0,
        showDismissibleAlert: false
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    }
  }
</script>