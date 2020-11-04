<template>
    <div>
        <div class="container">
            <hero></hero>
            <aboutMe :observer="observer"></aboutMe>
            <dayJob :observer="observer"></dayJob>
            <happyDev></happyDev>
            <contactForm></contactForm>
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
    },
    data() {
        return {
            observer: null
        }
    },
    mounted() {
        this.observer = new IntersectionObserver(this.onElementObserved, {
            threshold: 0.2
        })
    },
    beforeDestroy() {
        this.observer.disconnect()
    },
    methods: {
        onElementObserved(entries) {
            entries.forEach(({ target, isIntersecting }) => {
                if (!isIntersecting) {
                    return
                }

                target.classList.add('make-visible')

                this.observer.unobserve(target)
            })
        }
    }
}
</script>
