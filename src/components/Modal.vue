<template lang="pug">
    div.modal(
        :class="modalClasses", 
        @keydown.esc="onClose",
        v-focus="active"
        tabindex="1"
    )
        div.modal-background(@click="onClose")
        div.modal-content
            slot
        button.modal-close.is-large(@click="onClose")
</template>

<script>
export default {
    props: ['active', 'onClose'],
    computed: {
        modalClasses() {
            return {
                'is-active': this.active
            };
        }
    }
};
</script>

