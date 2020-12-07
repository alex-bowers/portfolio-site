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
    background-color: $secondary-colour;
    border: $border-width-small solid black;
    border-top: none;
    margin: 0 $border-width-small;
    padding: 5rem 2rem;
}

@media (min-width: $breakpoint-large) {
    .footer {
        position: sticky;
        bottom: 0;
        z-index: 0;
    }
}

@media (min-width: $breakpoint-xlarge) {
    .footer {
        border-width: $border-width-large;
        margin: 0 $border-width-large;
    }
}
</style>
