<template>
    <footer class="footer">
        <social-links></social-links>
    </footer>
</template>

<script>
import SocialLinks from './Common/Social.vue'

export default {
    components: {
        SocialLinks
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/colours.scss';

.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    bottom: 0;
    background-color: $primary-colour;
    padding: 2rem;
    z-index: -1;
}
</style>
