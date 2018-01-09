// TODO: refactor it somehow, looks bad
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
                    div.level-item(ref="price")
                        div.tag.is-success.is-large ${{ price }}
                        //- TODO: add switching between success/danger based on previous value
        div.card-footer
            div.card-footer-item
                div.control
                    input.input(
                        type="text", 
                        placeholder="Quantity", 
                        v-model="quantityForAction",
                        @input="$v.quantityForAction.$touch",
                        :class="{ 'is-danger': isInvalid }"
                    )
            div.card-footer-item
                strong(:class="{ 'has-text-danger': isCalculatedPriceInvalid }") ${{ calculatedPrice | money }}
            div.card-footer-item
                button.button(
                    @click="onAction" 
                    :disabled="isInvalid"
                ) {{ actionName }}
</template>

<script>
import { mapState } from 'vuex';
import { validationMixin } from 'vuelidate';
import { required, maxValue, minValue } from 'vuelidate/lib/validators';

import actionTypes from './actionTypes';
import money from '../filters/money';

export default {
    mixins: [validationMixin],
    data() {
        return {
            quantityForAction: 1
        };
    },
    computed: {
        ...mapState(['funds']),
        calculatedPrice() {
            return Number(this.price * this.quantityForAction);
        },
        isInvalid() {
            return this.isQuantityForActionInvalid || this.isCalculatedPriceInvalid;
        },
        isQuantityForActionInvalid() {
            return this.$v.quantityForAction.$error;
        },
        isCalculatedPriceInvalid() {
            if (this.actionType === actionTypes.SELL) {
                return false;
            }
            return this.$v.calculatedPrice.$invalid;
        },
        actionName() {
            return this.actionType == actionTypes.BUY
                ? 'Buy'
                : this.actionType == actionTypes.SELL ? 'Sell' : 'Action';
        }
    },
    watch: {
        // TODO: how to do this better?
        price() {
            this.$refs.price.classList.add('animated');
            this.$refs.price.classList.add('shake');

            setTimeout(() => {
                this.$refs.price.classList.remove('animated');
                this.$refs.price.classList.remove('shake');
            }, 1000);
        }
    },
    filters: {
        money
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
            type: Number
        },
        actionType: {
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
            this.$v.quantityForAction.$touch();

            if (this.actionType == actionTypes.BUY) {
                this.$v.calculatedPrice.$touch();
            }

            this.action({
                name: this.name,
                quantity: Number(this.quantityForAction)
            });
        }
    },
    validations() {
        switch (this.actionType) {
            case actionTypes.BUY:
                return {
                    quantityForAction: {
                        required
                    },
                    calculatedPrice: {
                        maxValue: maxValue(this.funds)
                    }
                };
            case actionTypes.SELL:
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
