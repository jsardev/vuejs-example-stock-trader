<template lang="pug">
    transition(name="fade" mode="out-in")
        modal(v-if="show", :onClose="cancelLoad", :active="show")
            div.box
                h2.title.is-3 Load
                h3.subtitle.is-6 Choose a save from the table below. Just click on the desired row to go back to selected game state.
                table.table.is-striped.is-hoverable.is-fullwidth
                    thead
                        tr
                            th Date
                            th Name
                    tbody
                        tr(v-for="item in items" @click="load(item)")
                            td {{ item.timestamp }}
                            td {{ item.name }}
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Modal from '../../../components/Modal.vue';

export default {
    computed: mapState('persistence', {
        inProgress: state => state.load.inProgress,
        show: state => state.load.showModal,
        items: state => state.load.items
    }),
    methods: mapActions('persistence', ['load', 'cancelLoad']),
    components: {
        modal: Modal
    }
};
</script>

<style scoped>
.table tr:hover {
    cursor: pointer;
}
</style>
