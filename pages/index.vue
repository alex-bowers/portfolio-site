<template>
    <div>
        <div class="container">
            <hero class="full-screen"></hero>
            <aboutMe class="content-screen" :observer="observer"></aboutMe>
            <contactForm></contactForm>
        </div>
        <site-footer></site-footer>
    </div>
</template>

<script>
import AboutMe from '~/components/AboutMe.vue'
import ContactForm from '~/components/ContactForm.vue'
import Hero from '~/components/Hero.vue'
import SiteFooter from '~/components/Footer.vue'

export default {
    components: {
        AboutMe,
        ContactForm,
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
