<template lang="pug">
    nav.navbar.is-dark.is-active
        div.container
            div.navbar-brand
                router-link(to="/" class="navbar-item is-text-centered")
                    h1.title.is-4.has-text-white Stock Trader
            div.navbar-menu.is-active
                div.navbar-start
                    router-link(to="/portfolio" class="navbar-item") Portfolio
                    router-link(to="/stocks" class="navbar-item") Stocks
                div.navbar-end
                    persistence
                    div.navbar-item Day:
                        | &nbsp;
                        strong.has-text-white {{ day }}
                    div.navbar-item 
                        button.button(@click="endday") End Day
                    div.navbar-item Funds:
                        | &nbsp;
                        strong.has-text-white ${{ funds | money }}
                    div.navbar-item(@click="invokeHelpModal")
                        span.icon.has-text-white
                            i.fa.fa-question-circle.fa-lg

</template>

<script>
import { mapState, mapActions } from 'vuex';
import { PersistenceNavItem } from '../../persistence';

import money from '../../../filters/money';

export default {
    computed: mapState('app', ['day', 'funds']),
    methods: mapActions('app', ['endday', 'invokeHelpModal']),
    components: {
        persistence: PersistenceNavItem
    },
    filters: {
        money
    }
};
</script>

<style scoped>
.icon:hover {
    cursor: pointer;
}
</style>
