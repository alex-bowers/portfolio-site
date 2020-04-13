<template>
    <div class="container">
        <hero></hero>
        <about-me></about-me>
        <dayJob></dayJob>
        <happy-dev></happy-dev>
        <site-footer></site-footer>
    </div>
</template>

<script>
import AboutMe from '~/components/AboutMe.vue'
import DayJob from '~/components/DayJob.vue'
import HappyDev from '~/components/HappyDev.vue'
import Hero from '~/components/Hero.vue'
import SiteFooter from '~/components/Footer.vue'

export default {
    components: {
        AboutMe,
        DayJob,
        HappyDev,
        Hero,
        SiteFooter
    }
}
</script>

<style></style>
