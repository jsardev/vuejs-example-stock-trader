<template lang="pug">
    div.section
        div.container
            h2.title Portfolio
            div(v-if="items.length === 0")
                div.content
                    p 
                        | You have no shares right now. Buy some on the 
                        router-link(to="/stocks") market.
            div(v-else)
                div.columns
                    div.column.is-half(v-for="asset in items")
                        asset(
                            :name="asset.name", 
                            :quantity="asset.quantity", 
                            :price="asset.price", 
                            action="SELL"
                            :onAction="sell"
                        )
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Asset from '../../../components/Asset';

export default {
    computed: mapGetters('portfolio', ['items']),
    methods: mapActions('stock', ['sell']),
    components: {
        Asset
    }
};
</script>
