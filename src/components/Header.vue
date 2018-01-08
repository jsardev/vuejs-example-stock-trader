<template lang="pug">
    nav.navbar.is-dark
        div.container
            div.navbar-brand
                router-link(to="/" class="navbar-item") 
                    h1.title.is-4.has-text-white Stock Trader
            div.navbar-menu
                div.navbar-start
                    router-link(to="/portfolio" class="navbar-item") Portfolio
                    router-link(to="/stocks" class="navbar-item") Stocks
                div.navbar-end
                    div.navbar-item Funds:
                        | &nbsp;
                        strong.has-text-white {{ funds | money }}
</template>

<script>
import { mapState } from 'vuex';
import money from '../filters/money';

export default {
    computed: {
        ...mapState(['funds'])
    },
    filters: {
        money
    }
};
</script>

