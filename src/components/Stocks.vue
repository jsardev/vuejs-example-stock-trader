<template lang="pug">
    div.section
        div.container
            h2.title Stocks
            div.columns
                div.column.is-one-third(v-for="asset in stocks")
                    asset(
                        :name="asset.name", 
                        :price="asset.price", 
                        :actionName="'Buy'"
                        :action="buy"
                    )
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Asset from './Asset.vue';

export default {
    computed: {
        ...mapState(['stocks'])
    },
    methods: {
        ...mapActions(['buy'])
    },
    components: {
        Asset
    }
};
</script>
