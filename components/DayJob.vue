/* eslint-disable prettier/prettier */
<template>
    <section class="day-job">
        <div class="day-job--background"></div>
        <div class="day-job--container">
            <div class="day-job--container--left">
                <img
                    src="../assets/images/laptop-phone.jpg"
                    alt="Laptop and mobile example screenshots"
                    class="animate-element"
                    width="300px"
                />
                <h2 class="animate-element">Blue Bay Travel</h2>
                <img
                    src="../assets/images/mac.jpg"
                    alt="iMac example screenshot"
                    class="animate-element"
                    width="300px"
                />
            </div>
            <div class="day-job--container--right">
                <p class="animate-element">
                    <!-- eslint-disable-next-line prettier/prettier -->
                    I have worked at Blue Bay Travel since November 2012. Progressing from Junior to Lead Developer.
                </p>
                <p class="animate-element">
                    <!-- eslint-disable-next-line prettier/prettier -->
                    I manage a team of developers and we are responsible for four customer facing websites and a number of internal web applications. Including a custom CRM, custom reservations system and a custom pricing system that powers the websites and our internal applications with millions of holiday prices everyday.
                </p>
                <p class="animate-element">
                    <!-- eslint-disable-next-line prettier/prettier -->
                    Outside of my project management and team responsibilities, I focus on improving the user experience and product performance on all of our projects. By designing and developing new features that concider both the customer and employee journeys.
                </p>
            </div>
        </div>
        <!-- animate-element -->
    </section>
</template>

<script>
import ObserverMixin from '~/mixins/observer.js'

export default {
    mixins: [ObserverMixin]
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/colours.scss';
@import '~/assets/scss/settings.scss';

.day-job {
    position: relative;
    color: $secondary-colour;
}

.day-job--container {
    padding: 0 1rem;
}

.day-job--background {
    display: none;
    background-color: $primary-colour;
    z-index: 1;
}

.day-job--container--left {
    z-index: 2;
    img {
        display: none;
    }
}

.day-job--container--right {
    z-index: 1;
}

@media (orientation: portrait) and (min-width: $breakpoint-medium),
    (orientation: landscape) and (min-width: $breakpoint-large) {
    .day-job--background {
        display: block;
        position: absolute;
        bottom: 0;
        left: 30%;
        right: 0;
        top: 25%;
    }

    .day-job--container {
        display: flex;
        align-items: center;
        flex-direction: row;
        padding: 0 3rem;
    }

    .day-job--container--left {
        h2 {
            margin: 0.5rem 0;
        }
        img {
            display: block;
        }
    }

    .day-job--container--right {
        background-color: $primary-colour;
        color: $white;
        padding: 1rem;
    }
}

@media (min-width: $breakpoint-xlarge) {
    .day-job--background {
        left: 22%;
        top: 30%;
    }
    .day-job--container {
        max-width: 1400px;
    }
    .day-job--container--left {
        img {
            width: 450px;
        }
    }
    .day-job--container--right {
        font-size: 1.25rem;
        max-width: 700px;
        padding-left: 4rem;
    }
}

@media (min-width: $breakpoint-xxlarge) {
    .day-job--background {
        left: 30%;
    }
}
</style>
