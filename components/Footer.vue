<template>
    <footer class="footer">
        <social-links :is-on-primary-colour="true"></social-links>
    </footer>
</template>

<script>
import SocialLinks from '~/components/Common/Social.vue'

export default {
    components: {
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
