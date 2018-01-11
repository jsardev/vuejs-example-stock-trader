<template lang="pug">
    div
        navigation
        transition(name="fade" mode="out-in")
            router-view
        save-modal
        load-modal
</template>

<script>
import { mapState, mapActions } from 'vuex';

import { Navigation } from './modules/app';
import { SaveModal, LoadModal } from './modules/persistence';

export default {
    components: {
        Navigation,
        SaveModal,
        LoadModal
    }
};
</script>