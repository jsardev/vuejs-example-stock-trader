// TODO: add helper buttons
<template lang="pug">
    div.section
        div.container
            h2.title Stocks
            div.columns.is-multiline
                div.column.is-one-third(v-for="asset in items")
                    asset(
                        :name="asset.name", 
                        :price="asset.price", 
                        :actionType="availableAction"
                        :action="buy"
                    )
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Asset from '../../../components/Asset';

export default {
    data() {
        return {
            availableAction: 'BUY'
        };
    },
    computed: {
        ...mapState('stock', ['items', 'initialized'])
    },
    methods: {
        ...mapActions('stock', ['buy', 'generateData'])
    },
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
