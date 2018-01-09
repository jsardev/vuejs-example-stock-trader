<template lang="pug">
    div.section
        div.container
            h2.title Stocks
            div.columns
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

import Asset from './Asset.vue';
import actionTypes from './actionTypes';

export default {
    data() {
        return {
            availableAction: actionTypes.BUY
        };
    },
    computed: {
        ...mapState('stock', ['items'])
    },
    methods: {
        ...mapActions('stock', ['buy'])
    },
    components: {
        Asset
    }
};
</script>
