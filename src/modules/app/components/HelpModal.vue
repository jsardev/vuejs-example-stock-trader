<template lang="pug">
    transition(name="fade" mode="out-in")
        modal(v-if="showHelpModal", :onClose="revokeHelpModal", :active="showHelpModal")
            div.box
                div.content
                    h4 Keyboard shortcuts
                    table.table.is-striped.is-fullwidth
                        thead
                            tr
                                th Key
                                th Action
                        tbody
                            tr
                                td p
                                td Go to Portfolio
                            tr
                                td s
                                td Go to Stocks
                            tr
                                td d
                                td End day
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Modal from '../../../components/Modal.vue';

export default {
    computed: mapState('app', ['showHelpModal']),
    methods: mapActions('app', ['revokeHelpModal']),
    components: {
        modal: Modal
    }
};
</script>
