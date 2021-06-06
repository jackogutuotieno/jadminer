<template>
    <div>
        <b-jumbotron class="mainHeader">
            <b-container>
                <h1>Tabs</h1>
            </b-container>
        </b-jumbotron>
        <b-container>
            <b-card no-body>
                <b-tabs card>
                <b-tab title="Tab 1" active>
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et faucibus urna, sed lobortis mi. Praesent placerat dui nec elit pellentesque pulvinar. Maecenas porta nisi quis est facilisis venenatis. Curabitur neque nunc, congue vel magna in, efficitur tempor sapien. Vestibulum ut lorem nibh. Maecenas vel leo eu tortor posuere semper. Donec mollis, risus quis bibendum posuere, turpis turpis dictum elit, dapibus euismod eros enim ut lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse mattis ipsum ex, vel porttitor metus vehicula eget.</b-card-text>
                </b-tab>
                <b-tab title="Tab 2">
                    <b-card-text>Praesent eget ante ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque a lectus ut libero vestibulum pulvinar eu ac mauris. Donec dui mauris, pulvinar non tortor eget, lacinia varius massa. In sit amet varius ex. Pellentesque diam justo, facilisis et gravida sit amet, ultrices nec nunc. Nunc finibus ultricies quam egestas ultrices. Suspendisse sed lectus vitae turpis ullamcorper scelerisque in sed dui.</b-card-text>
                </b-tab>
                </b-tabs>
            </b-card>
        </b-container>
        <b-container>
            <h3 class="mt-3">Alignment</h3>
            <b-card no-body>
                <b-tabs card align="center">
                <b-tab title="Tab 1" active>
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et faucibus urna, sed lobortis mi. Praesent placerat dui nec elit pellentesque pulvinar. Maecenas porta nisi quis est facilisis venenatis. Curabitur neque nunc, congue vel magna in, efficitur tempor sapien. Vestibulum ut lorem nibh. Maecenas vel leo eu tortor posuere semper. Donec mollis, risus quis bibendum posuere, turpis turpis dictum elit, dapibus euismod eros enim ut lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse mattis ipsum ex, vel porttitor metus vehicula eget.</b-card-text>
                </b-tab>
                <b-tab title="Tab 2">
                    <b-card-text>Praesent eget ante ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque a lectus ut libero vestibulum pulvinar eu ac mauris. Donec dui mauris, pulvinar non tortor eget, lacinia varius massa. In sit amet varius ex. Pellentesque diam justo, facilisis et gravida sit amet, ultrices nec nunc. Nunc finibus ultricies quam egestas ultrices. Suspendisse sed lectus vitae turpis ullamcorper scelerisque in sed dui.</b-card-text>
                </b-tab>
                </b-tabs>
            </b-card>
        </b-container>
        <b-container>
            <h3 class="mt-3">Bottom placement</h3>
            <div>
                <b-card no-body>
                    <b-tabs pills card end>
                    <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
                    <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
                    </b-tabs>
                </b-card>
            </div>
        </b-container>
        <b-container>
            <div>
                <h3 class="mt-3">Vertical Tabs</h3>
                <b-card no-body>
                    <b-tabs pills card vertical>
                    <b-tab title="Tab 1" active><b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et faucibus urna, sed lobortis mi. Praesent placerat dui nec elit pellentesque pulvinar. Maecenas porta nisi quis est facilisis venenatis. Curabitur neque nunc, congue vel magna in, efficitur tempor sapien. Vestibulum ut lorem nibh. Maecenas vel leo eu tortor posuere semper. Donec mollis, risus quis bibendum posuere, turpis turpis dictum elit, dapibus euismod eros enim ut lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse mattis ipsum ex, vel porttitor metus vehicula eget.</b-card-text></b-tab>
                    <b-tab title="Tab 2"><b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et faucibus urna, sed lobortis mi. Praesent placerat dui nec elit pellentesque pulvinar. Maecenas porta nisi quis est facilisis venenatis. Curabitur neque nunc, congue vel magna in, efficitur tempor sapien. Vestibulum ut lorem nibh. Maecenas vel leo eu tortor posuere semper. Donec mollis, risus quis bibendum posuere, turpis turpis dictum elit, dapibus euismod eros enim ut lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse mattis ipsum ex, vel porttitor metus vehicula eget.</b-card-text></b-tab>
                    <b-tab title="Tab 3"><b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et faucibus urna, sed lobortis mi. Praesent placerat dui nec elit pellentesque pulvinar. Maecenas porta nisi quis est facilisis venenatis. Curabitur neque nunc, congue vel magna in, efficitur tempor sapien. Vestibulum ut lorem nibh. Maecenas vel leo eu tortor posuere semper. Donec mollis, risus quis bibendum posuere, turpis turpis dictum elit, dapibus euismod eros enim ut lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse mattis ipsum ex, vel porttitor metus vehicula eget.</b-card-text></b-tab>
                    </b-tabs>
                </b-card>
            </div>
        </b-container>
    </div>
</template>