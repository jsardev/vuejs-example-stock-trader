<template lang="pug">
    div.section
        div.container
            h2.title Portfolio
            div.content(v-if="portfolio.length === 0")
                p 
                    | You have no shares right now. Buy some on the 
                    router-link(to="/stocks") market.
            div(v-else)
                div.columns
                    div.column.is-one-third(v-for="share in portfolio")
                        div.card
                            div.card-content
                                    div.level
                                        div.level-left
                                            div.level-item
                                                h3.title.is-4 {{share.name}}
                                        div.level-right
                                            div.level-item
                                                div.tag.is-info.is-large {{ share.quantity }}
                                            div.level-item
                                                div.tag.is-success.is-large ${{ share.price }}
                                                //- TODO: add switching between success/danger based on previous value
                            div.card-footer
                                div.card-footer-item
                                    div.control
                                        input.input(type="text" placeholder="Quantity")
                                div.card-footer-item
                                    a Sell
                            
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['portfolio'])
    }
};
</script>

<style scoped>
.stock-column {
    padding: 20px 0px;
}
</style>
