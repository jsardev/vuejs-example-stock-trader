<template lang="pug">
    div.card
        div.card-content
            div.level
                div.level-left
                    div.level-item
                        h3.title.is-4 {{ name }}
                div.level-right
                    div.level-item(v-if="quantity")
                        div.tag.is-info.is-large {{ quantity }}
                    div.level-item
                        div.tag.is-success.is-large ${{ price }}
                        //- TODO: add switching between success/danger based on previous value
        div.card-footer
            div.card-footer-item
                div.control
                    input.input(type="text", placeholder="Quantity", v-model="quantityForAction")
            div.card-footer-item 
                strong ${{ calculatePrice(price) }}
            div.card-footer-item
                a(@click="onAction") {{ actionName }}
                            
</template>

<script>
export default {
    data() {
        return {
            quantityForAction: 1
        };
    },
    props: {
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number
        },
        price: {
            type: Number,
            required: true
        },
        actionName: {
            type: String,
            required: true
        },
        action: {
            type: Function,
            required: true
        }
    },
    methods: {
        onAction() {
            this.action({
                name: this.name,
                quantity: this.quantityForAction
            });
        },
        calculatePrice(price) {
            return price * this.quantityForAction;
        }
    }
};
</script>
