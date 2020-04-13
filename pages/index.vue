<template>
    <div class="container">
        <hero></hero>
        <about-me></about-me>
        <happy-dev></happy-dev>
        <site-footer></site-footer>
    </div>
</template>

<script>
import AboutMe from '~/components/AboutMe.vue'
import SiteFooter from '~/components/Footer.vue'
import HappyDev from '~/components/HappyDev.vue'
import Hero from '~/components/Hero.vue'

export default {
    components: {
        AboutMe,
        SiteFooter,
        HappyDev,
        Hero
    }
}
</script>

<style></style>
