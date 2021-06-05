<template>
  <div>
    <b-jumbotron class="mainHeader">
        <b-container>
            <h1>Alerts</h1>
        </b-container>
    </b-jumbotron>
    <b-container>
        <b-alert show>Default Alert</b-alert>
    <b-alert variant="success" show>Success Alert</b-alert>

    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Dismissible Alert!
    </b-alert>

    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1 btn btn-primary">
      Show alert with count-down timer
    </b-button>
    <b-button @click="showDismissibleAlert=true" variant="info" class="m-1 btn btn-primary">
      Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
    </b-button>
    </b-container>
    <b-container>
        <h2 class="pt-3 pb-3">Alert Variants</h2>
        <b-alert show variant="primary">Primary Alert</b-alert>
        <b-alert show variant="secondary">Secondary Alert</b-alert>
        <b-alert show variant="success">Success Alert</b-alert>
        <b-alert show variant="danger">Danger Alert</b-alert>
        <b-alert show variant="warning">Warning Alert</b-alert>
        <b-alert show variant="info">Info Alert</b-alert>
        <b-alert show variant="light">Light Alert</b-alert>
        <b-alert show variant="dark">Dark Alert</b-alert>
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