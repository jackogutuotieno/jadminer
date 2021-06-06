<template>
  <div>
    <b-jumbotron class="mainHeader">
        <b-container>
            <h1>Buttons</h1>
        </b-container>
    </b-jumbotron>
    <b-container>
        <div>
            <h3>Solid color variants</h3>
            <b-button variant="primary">Primary</b-button>
            <b-button variant="secondary">Secondary</b-button>
            <b-button variant="success">Success</b-button>
            <b-button variant="danger">Danger</b-button>
            <b-button variant="warning">Warning</b-button>
            <b-button variant="info">Info</b-button>
            <b-button variant="light">Light</b-button>
            <b-button variant="dark">Dark</b-button>
        </div>
    </b-container>
    <b-container>
        <div>
            <h3>Outline color variants</h3>
            <b-button variant="outline-primary">Primary</b-button>
            <b-button variant="outline-secondary">Secondary</b-button>
            <b-button variant="outline-success">Success</b-button>
            <b-button variant="outline-danger">Danger</b-button>
            <b-button variant="outline-warning">Warning</b-button>
            <b-button variant="outline-info">Info</b-button>
            <b-button variant="outline-light">Light</b-button>
            <b-button variant="outline-dark">Dark</b-button>
        </div>
        <div>
            <h3>Block level buttons</h3>
            <b-button block variant="primary" class="mw-100">Block Level Button</b-button>
        </div>
        <div>
            <h3>Pill Style</h3>
            <b-button pill>Button</b-button>
            <b-button pill variant="primary">Button</b-button>
            <b-button pill variant="outline-secondary">Button</b-button>
            <b-button pill variant="success">Button</b-button>
            <b-button pill variant="outline-danger">Button</b-button>
        </div>
        <div>
            <h3>Squared Style</h3>
            <b-button squared>Button</b-button>
            <b-button squared variant="primary">Button</b-button>
            <b-button squared variant="outline-secondary">Button</b-button>
            <b-button squared variant="success">Button</b-button>
            <b-button squared variant="outline-danger">Button</b-button>
            <b-button squared variant="info">Button</b-button>
        </div>
        <div>
            <h3>Disabled Style</h3>
            <b-button disabled size="lg" variant="primary">Disabled</b-button>
            <b-button disabled size="lg">Also Disabled</b-button>
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