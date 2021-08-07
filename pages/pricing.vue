<template>
    <div>
        <b-jumbotron class="mainHeader">
            <b-container>
                <h1>Available Plans</h1>
            </b-container> <!-- ./b-container -->
        </b-jumbotron> <!-- ./b-jumbotron -->
        <b-container align-v="center" class="container">
            <b-card-group deck class="mb-3">
                <b-card v-for="block in pricing_blocks.blocks" :key="block.id"
                    border-variant="default"
                    :header= block.headerText
                    header-bg-variant="secondary"
                    header-text-variant="white"
                    align="center"
                    :title= block.title
                    tag="article"
                    style="max-width: auto;"
                    class="pricingTable mb-5 mt-2"
                >
                    <b-card-text>
                        <p>
                            {{ block.introText }}
                        </p>
                    </b-card-text>
                    <b-list-group flush>
                        <b-list-group-item v-for="item in block.items" :key="item.id">
                            <span :class="item.icon"></span>
                            {{ item.text }}
                        </b-list-group-item>
                    </b-list-group>
                    <br />
                    <b-button variant="secondary">Purchase plan <span class="icon-arrow-right-circle"></span></b-button>
                    <br />
                </b-card> 
            </b-card-group>
        </b-container>
    </div> <!-- ./div -->
</template> <!-- ./template -->

<script>
    export default {
        data () {
            return {
                pricing_blocks: {
                    blocks : [
                        {
                            headerText : 'Gold',
                            title: '$90/month',
                            introText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at purus et nisi eleifend venenatis. ',
                            items : [
                                { icon: 'icon-check', text : 'ERP Integration' },
                                { icon: 'icon-check', text : 'Web Development' },
                                { icon: 'icon-check', text : 'Mobile App Development' },
                                { icon: 'icon-check', text : 'Usability Research & Audit' },
                                { icon: 'icon-check', text : 'Social Media Management' },
                                { icon: 'icon-check', text : 'Off/Online SEO' },
                            ]
                        },
                        {
                            headerText : 'Silver',
                            title: '$45/month',
                            introText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at purus et nisi eleifend venenatis. ',
                            items : [
                                { icon: 'icon-check', text : 'ERP Integration' },
                                { icon: 'icon-check', text : 'Web Development' },
                                { icon: 'icon-check', text : 'Mobile App Development' },
                                { icon: 'icon-check', text : 'Usability Research & Audit' },
                                { icon: 'icon-close', text : 'Social Media Management' },
                                { icon: 'icon-close', text : 'Off/Online SEO' },
                            ]
                        },  
                        {
                            headerText : 'Bronze',
                            title: '$20/month',
                            introText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at purus et nisi eleifend venenatis. ',
                            items : [
                                { icon: 'icon-check', text : 'ERP Integration' },
                                { icon: 'icon-check', text : 'Web Development' },
                                { icon: 'icon-close', text : 'Mobile App Development' },
                                { icon: 'icon-close', text : 'Usability Research & Audit' },
                                { icon: 'icon-close', text : 'Social Media Management' },
                                { icon: 'icon-close', text : 'Off/Online SEO' },
                            ]
                        },    
                    ]
                }
            }
        }
    }
</script>