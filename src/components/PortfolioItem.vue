<template lang="pug">
    div.card
        div.card-content
                div.level
                    div.level-left
                        div.level-item
                            h3.title.is-4 {{share.name}}
                    div.level-right
                        div.level-item
                            div.tag.is-info.is-large {{ share.quantity }}
                        div.level-item
                            div.tag.is-success.is-large ${{ share.price }}
                            //- TODO: add switching between success/danger based on previous value
        div.card-footer
            div.card-footer-item
                div.control
                    input.input(type="text", placeholder="Quantity", v-model="quantity")
            div.card-footer-item 
                strong ${{ sellPrice(share.price) }}
            div.card-footer-item
                a Sell
                            
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            quantity: 1
        };
    },
    props: ['share'],
    methods: {
        sellPrice(price) {
            return price * this.quantity;
        }
    }
};
</script>
