<template>
    <div class="container">
        <hero></hero>
        <about-me></about-me>
    </div>
</template>

<script>
import AboutMe from '~/components/AboutMe.vue'
import Hero from '~/components/Hero.vue'

export default {
    components: {
        AboutMe,
        Hero
    }
}
</script>

<style></style>
