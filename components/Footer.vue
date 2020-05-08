<template>
    <footer class="footer">
        <contact-form></contact-form>
        <social-links :is-on-primary-colour="true"></social-links>
    </footer>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue'
import SocialLinks from '~/components/Common/Social.vue'

export default {
    components: {
        ContactForm,
        SocialLinks
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/colours.scss';

.footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: sticky;
    bottom: 0;
    background-color: $primary-colour;
    padding: 2rem;
    z-index: 0;
}
</style>
