<template lang="pug">
    div.section
        div.container
            h2.title Stocks
            div.columns.is-multiline
                div.column.is-half(v-for="asset in items")
                    asset(
                        :name="asset.name", 
                        :price="asset.price",
                        :funds="funds"
                        action="BUY"
                        :onAction="buy"
                    )
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Asset from '../../../components/Asset';

export default {
    computed: {
        ...mapState('app', ['funds']),
        ...mapState('stock', ['items', 'initialized'])
    },
    methods: mapActions('stock', ['buy', 'generateData']),
    components: {
        Asset
    },
    beforeMount() {
        if (!this.initialized) {
            this.generateData();
        }
    }
};
</script>
