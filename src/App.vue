<template lang="pug">
    div
        app-header
        transition(name="fade" mode="out-in")
            router-view
</template>

<script>
import Header from './components/Header.vue';

export default {
    components: {
        appHeader: Header
    }
};
</script>

<style scoped>
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
