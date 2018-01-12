<template lang="pug">
    div.card
        div.card-content
            div.level
                div.level-left
                    div.level-item
                        h3.title.is-4 {{ name }}
                    div.level-item(v-if="quantity")
                        div.tag.is-info.is-large {{ quantity }}
                    div.level-item
                        div.tag.is-success.is-large ${{ price }}
        div.card-footer
            div.card-footer-item
                div.control
                    input.input(
                        type="number",
                        placeholder="Quantity", 
                        v-model="quantityForAction",
                        @input="$v.quantityForAction.$touch",
                        :class="quantityForActionClasses"
                        @keydown.enter="runAction"
                        tabindex="1"
                        v-focus="true"
                    )
            div.card-footer-item
                strong(:class="calculatedPriceClasses") ${{ calculatedPrice | money }}
            div.card-footer-item
                div.buttons
                    button.button(@click="maxQuantity") Max
                    button.button.is-info(
                        tabindex="2"
                        @click="runAction" 
                        :disabled="$v.$invalid"
                    ) {{ action | capitalize }}
</template>

<script>
import { mapState } from 'vuex';
import { validationMixin } from 'vuelidate';
import { required, maxValue, minValue } from 'vuelidate/lib/validators';

import money from '../filters/money';
import capitalize from '../filters/capitalize';

const actions = {
    BUY: 'BUY',
    SELL: 'SELL'
};

export default {
    mixins: [validationMixin],
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
        funds: {
            type: Number
        },
        action: {
            type: String,
            required: true
        },
        onAction: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            quantityForAction: 1
        };
    },
    computed: {
        calculatedPrice() {
            return Number(this.price * this.quantityForAction);
        },
        calculatedPriceClasses() {
            return {
                'has-text-danger': this.$v.calculatedPrice && this.$v.calculatedPrice.$invalid
            };
        },
        quantityForActionClasses() {
            return {
                'is-danger': this.$v.$invalid
            };
        }
    },
    filters: {
        money,
        capitalize
    },
    methods: {
        runAction() {
            if (!this.$v.$invalid) {
                this.$v.quantityForAction.$touch();

                if (this.$v.calculatedPrice) {
                    this.$v.calculatedPrice.$touch();
                }

                this.onAction({
                    name: this.name,
                    quantity: Number(this.quantityForAction)
                });
            }
        },
        maxQuantity() {
            if (this.action === actions.BUY) {
                this.quantityForAction = Math.floor(this.funds / this.price);
            } else {
                this.quantityForAction = this.quantity;
            }
        }
    },
    validations() {
        switch (this.action) {
            case actions.BUY:
                return {
                    quantityForAction: {
                        required
                    },
                    calculatedPrice: {
                        maxValue: maxValue(this.funds)
                    }
                };
            case actions.SELL:
                return {
                    quantityForAction: {
                        required,
                        maxValue: maxValue(this.quantity)
                    }
                };
        }
    }
};
</script>
