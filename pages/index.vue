<template>
    <div class="container">
        <hero></hero>
        <about-me></about-me>
        <happy-dev></happy-dev>
    </div>
</template>

<script>
import AboutMe from '~/components/AboutMe.vue'
import HappyDev from '~/components/HappyDev.vue'
import Hero from '~/components/Hero.vue'

export default {
    components: {
        AboutMe,
        HappyDev,
        Hero
    }
}
</script>

<style></style>
