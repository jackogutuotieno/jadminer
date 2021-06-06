<template>
    <div>
        <b-jumbotron class="mainHeader">
            <b-container>
                <h1>Card</h1>
            </b-container>
        </b-jumbotron>
        <b-container>
            <h3>Default</h3>
            <b-row>
                <b-col>
                    <b-card
                        title="Card Title"
                        img-src="../assets/images/img-01.jpg"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                    >
                        <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>

                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card
                        title="Card Title"
                        img-src="../assets/images/img-01.jpg"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                    >
                        <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>

                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>
                </b-col>
            </b-row>
            <div>
                <div>
                    <h3>Top and Bottom</h3>
                    <b-card-group deck>
                        <b-card img-src="../assets/images/img-02.jpg" img-alt="Card image" img-top>
                            <b-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et faucibus urna, sed lobortis mi.
                            </b-card-text>
                        </b-card>
                        <b-card img-src="../assets/images/img-02.jpg" img-alt="Card image" img-bottom>
                            <b-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et faucibus urna, sed lobortis mi.
                            </b-card-text>
                        </b-card>
                    </b-card-group>
                </div>
                <div class="mt-4">
                    <h3>Left and Right (or Start and End)</h3>
                    <b-card img-src="../assets/images/img-02.jpg" img-alt="Card image" img-left class="mb-3">
                    <b-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et faucibus urna, sed lobortis mi. Praesent placerat dui nec elit pellentesque pulvinar. Maecenas porta nisi quis est facilisis venenatis. Curabitur neque nunc, congue vel magna in, efficitur tempor sapien. Vestibulum ut lorem nibh. Maecenas vel leo eu tortor posuere semper. Donec mollis, risus quis bibendum posuere, turpis turpis dictum elit, dapibus euismod eros enim ut lacus.
                    </b-card-text>
                    </b-card>

                    <b-card img-src="../assets/images/img-02.jpg" img-alt="Card image" img-right>
                    <b-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et faucibus urna, sed lobortis mi. Praesent placerat dui nec elit pellentesque pulvinar. Maecenas porta nisi quis est facilisis venenatis. Curabitur neque nunc, congue vel magna in, efficitur tempor sapien. Vestibulum ut lorem nibh. Maecenas vel leo eu tortor posuere semper. Donec mollis, risus quis bibendum posuere, turpis turpis dictum elit, dapibus euismod eros enim ut lacus.
                    </b-card-text>
                    </b-card>
                </div>
            </div>
            <b-row>
                <b-col>
                    <h3 class="mt-3">Overlay Image</h3>
                    <b-card
                        overlay
                        img-src="../assets/images/img-02.jpg"
                        img-alt="Card Image"
                        text-variant="white"
                        title="Image Overlay"
                        sub-title="Subtitle"
                    >
                        <b-card-text>
                        Suspendisse convallis arcu gravida viverra vestibulum. Maecenas vel elit condimentum, suscipit magna ac, dictum risus. Morbi imperdiet cursus magna, a pharetra lorem consequat non.
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col>
                    <h3 class="mt-3">Overlay Image</h3>
                    <b-card
                        overlay
                        img-src="../assets/images/img-02.jpg"
                        img-alt="Card Image"
                        text-variant="white"
                        title="Image Overlay"
                        sub-title="Subtitle"
                    >
                        <b-card-text>
                        Suspendisse convallis arcu gravida viverra vestibulum. Maecenas vel elit condimentum, suscipit magna ac, dictum risus. Morbi imperdiet cursus magna, a pharetra lorem consequat non. Sed ultricies dictum volutpat.
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
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