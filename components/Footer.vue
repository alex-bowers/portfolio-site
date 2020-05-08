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
@import '~/assets/scss/settings.scss';

.footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $primary-colour;
    padding: 5rem 2rem;
}

@media (min-width: $breakpoint-large) {
    .footer {
        position: sticky;
        bottom: 0;
        z-index: 0;
    }
}
</style>
