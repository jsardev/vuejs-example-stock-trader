<template lang="pug">
    div
        app-header
        transition(name="fade" mode="out-in")
            router-view
        //- TODO: Move these modals somewhere else and add validation
        transition(name="fade" mode="out-in")
            modal(v-if="showSaveModal", :onClose="cancelSave", :active="showSaveModal")
                div.box
                    div.field
                        label.label Save name
                        div.control
                            input.input(v-model="saveName")
                    div.field.is-grouped.is-grouped-right
                        div.control
                            button.button(@click="cancelSave") Cancel
                        div.control
                            button.button.is-primary(:class="{ 'is-loading': isSaveInProgress }" @click="save(saveName)") Save
        transition(name="fade" mode="out-in")
            modal(v-if="showLoadModal", :onClose="cancelLoad", :active="showLoadModal")
                div.box
                    h2.title.is-3 Load
                    h3.subtitle.is-6 Choose a save from the table below. Just click on the desired row to go back to selected game state.
                    table.table.is-striped.is-hoverable.is-fullwidth
                        thead
                            tr
                                th Date
                                th Name
                        tbody
                            tr(v-for="item in saveItems" @click="load(item)")
                                td {{ item.timestamp }}
                                td {{ item.name }}
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Header from './components/Header.vue';
import Modal from './components/Modal.vue';

export default {
    data() {
        return {
            saveName: ''
        };
    },
    computed: mapState({
        isSaveInProgress: state => state.save.saving.inProgress,
        showSaveModal: state => state.save.saving.showModal,
        showLoadModal: state => state.save.loading.showModal,
        saveItems: state => state.save.loading.items
    }),
    methods: mapActions({
        save: 'save/save',
        cancelSave: 'save/cancelSave',
        load: 'save/load',
        cancelLoad: 'save/cancelLoad'
    }),
    components: {
        appHeader: Header,
        modal: Modal
    }
};
</script>

<style scoped>
.table tr:hover {
    cursor: pointer;
}

.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity 0.5s;
}

.fade-leave-active {
    transition: opacity 0.5s;
    opacity: 0;
}
</style>
