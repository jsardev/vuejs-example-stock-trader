<template lang="pug">
    div.navbar-item
        div.buttons
            button.button.is-info(@click="invokeSaveModal") Save
            button.button.is-info(@click="invokeLoadModal" :class="{ 'is-loading': isLoadInProgress }") Load
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: mapState('persistence', {
        isLoadInProgress: state => state.load.inProgress
    }),
    methods: mapActions('persistence', ['invokeSaveModal', 'invokeLoadModal'])
};
</script>
