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
                        portfolio-item(:share="share")
                            
</template>

<script>
import { mapState } from 'vuex';
import PortfolioItem from './PortfolioItem.vue';

export default {
    computed: {
        ...mapState(['portfolio'])
    },
    components: {
        PortfolioItem
    }
};
</script>
