<template>
    <section class="hero">
        <div class="hero--message">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <h1 v-html="introduction"></h1>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            introduction: "Hello.<br>I'm Alex Bowers."
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/colours.scss';
@import '~/assets/scss/settings.scss';

.hero {
    background-color: $primary-colour;
    color: $white;
    position: relative;
    height: 100vh;
    width: 100vw;
}

.hero--message {
    position: absolute;
    bottom: 10%;
    padding: 1rem;
    h1 {
        font-size: 4rem;
        margin: 0;
    }
}

@media (min-width: $breakpoint-medium) and (max-width: $breakpoint-large) {
    .hero {
        height: 50vh;
    }
}

@media (min-width: $breakpoint-large) {
    .hero {
        height: 100vh;
    }
    .hero--message {
        position: absolute;
        bottom: 10%;
        left: 10%;
        h1 {
            font-size: 6rem;
        }
    }
}
</style>
