<template lang="pug">
    div.hero.is-light
        div.hero-body
            div.container
                div.title.has-text-centered Goal: ${{ goal | money }}
                progress.progress(:value="funds", :max="goal", :class="progressClasses")
</template>

<script>
import { mapState } from 'vuex';
import money from '../../../filters/money';

export default {
    computed: {
        ...mapState('app', ['funds', 'goal']),
        progress() {
            return this.funds / this.goal * 100;
        },
        progressClasses() {
            return {
                'is-danger': this.progress <= 20,
                'is-warning': this.progress >= 50,
                'is-success': this.progress >= 80
            };
        }
    },
    filters: {
        money
    }
};
</script>
