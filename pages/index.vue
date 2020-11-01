<template>
    <div>
        <div class="container">
            <hero></hero>
            <about-me></about-me>
            <dayJob></dayJob>
            <happy-dev></happy-dev>
            <contact-form></contact-form>
        </div>
        <site-footer></site-footer>
    </div>
</template>

<script>
import AboutMe from '~/components/AboutMe.vue'
import ContactForm from '~/components/ContactForm.vue'
import DayJob from '~/components/DayJob.vue'
import HappyDev from '~/components/HappyDev.vue'
import Hero from '~/components/Hero.vue'
import SiteFooter from '~/components/Footer.vue'

export default {
    components: {
        AboutMe,
        ContactForm,
        DayJob,
        HappyDev,
        Hero,
        SiteFooter
    }
}
</script>

<style></style>
