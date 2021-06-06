<template>
  <div>
    <b-jumbotron class="mainHeader">
        <b-container>
            <h1>Modal</h1>
        </b-container>
    </b-jumbotron>
    <b-container>
        <div>
            <!-- Using modifiers -->
            <b-button v-b-modal.my-modal>Show Modal</b-button>

            <!-- Using value -->
            <b-button v-b-modal="'my-modal'">Show Modal</b-button>

            <!-- The modal -->
            <b-modal id="my-modal" title="Modal Title">Praesent eget ante ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </b-modal>
        </div>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>