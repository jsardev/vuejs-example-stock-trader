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
                    a.navbar-item
                        div.buttons
                            button.button.is-info(@click="save") Save
                            button.button.is-info(@click="load" :class="{ 'is-loading': isLoadInProgress }") Load
                    div.navbar-item Day:
                        | &nbsp;
                        strong.has-text-white {{ day }}
                    div.navbar-item 
                        button.button(@click="endday") End Day
                    div.navbar-item Funds:
                        | &nbsp;
                        strong.has-text-white ${{ funds | money }}
</template>

<script>
import { mapState, mapActions } from 'vuex';
import money from '../filters/money';

export default {
    computed: {
        ...mapState({
            funds: state => state.app.funds,
            day: state => state.app.day,
            isLoadInProgress: state => state.persistence.load.inProgress
        })
    },
    methods: {
        ...mapActions({
            save: 'persistence/invokeSaveModal',
            load: 'persistence/invokeLoadModal',
            endday: 'app/endday'
        })
    },
    filters: {
        money
    }
};
</script>

