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
                    div.column.is-one-third(v-for="asset in portfolio")
                        asset(
                            :name="asset.name", 
                            :quantity="asset.quantity", 
                            :price="asset.price", 
                            :actionName="'Sell'"
                            :action="sell"
                        )
                            
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Asset from './Asset.vue';

export default {
    computed: {
        ...mapState(['portfolio'])
    },
    methods: {
        ...mapActions(['sell'])
    },
    components: {
        Asset
    }
};
</script>
