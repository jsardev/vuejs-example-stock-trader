<template lang="pug">
    transition(name="fade" mode="out-in")
        modal(v-if="show", :onClose="cancelSave", :active="show")
            div.box
                div.field
                    label.label Save name
                    div.control
                        input.input(v-model="saveName", v-focus="show", @keydown.enter="save(saveName)")
                div.field.is-grouped.is-grouped-right
                    div.control
                        button.button(@click="cancelSave") Cancel
                    div.control
                        button.button.is-primary(:class="submitButtonClasses", @click="save(saveName)") Save
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Modal from '../../../components/Modal.vue';

export default {
    data() {
        return {
            saveName: ''
        };
    },
    computed: {
        ...mapState('persistence', {
            inProgress: state => state.save.inProgress,
            show: state => state.save.showModal
        }),
        submitButtonClasses() {
            return {
                'is-loading': this.inProgress
            };
        }
    },
    methods: mapActions('persistence', ['save', 'cancelSave']),
    components: {
        modal: Modal
    }
};
</script>
