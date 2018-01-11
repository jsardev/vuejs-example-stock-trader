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

<style scoped>
.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity 0.3s;
}

.fade-leave-active {
    transition: opacity 0.3s;
    opacity: 0;
}
</style>
