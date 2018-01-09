<template lang="pug">
    div.section
        div.container
            h2.title Portfolio
            div(v-if="portfolio.length === 0")
                div.content
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
import { mapGetters, mapActions } from 'vuex';
import Asset from './Asset.vue';

export default {
    computed: {
        ...mapGetters(['portfolio'])
    },
    methods: {
        ...mapActions(['sell'])
    },
    components: {
        Asset
    }
};
</script>
