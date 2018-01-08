<template lang="pug">
    div
        app-header
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