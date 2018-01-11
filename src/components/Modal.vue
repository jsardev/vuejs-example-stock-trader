<template lang="pug">
    div.modal(:class="{ 'is-active': active }")
        div.modal-background(@click="onClose")
        div.modal-content
            slot
        button.modal-close.is-large(@click="onClose")
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    props: ['active', 'onClose']
};
</script>

