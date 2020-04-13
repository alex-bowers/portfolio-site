<template>
    <section class="about-me">
        <div class="about-me--image">
            <div class="about-me--image--me">
                <img src="../assets/images/profile.jpg" alt="Profile Picture" />
                <div class="image--me--background"></div>
            </div>
            <div class="about-me--image--social">
                <social-links
                    :has-no-padding-on-ends="true"
                    padding="10px"
                ></social-links>
            </div>
        </div>
        <div class="about-me--content">
            <div class="about-me--content--statement">
                <h2>I'm the Lead Developer at Blue Bay Travel.</h2>
                <div>Located in Stoke-on-Trent, UK.</div>
            </div>
            <div class="about-me--content--list">
                <h3>About me...</h3>
                <ol>
                    <li v-for="(item, itemIndex) in list" :key="itemIndex">
                        {{ item }}
                    </li>
                </ol>
            </div>
        </div>
    </section>
</template>

<script>
import SocialLinks from '~/components/Common/Social.vue'

export default {
    components: {
        SocialLinks
    },
    data() {
        return {
            list: [
                'Full Stack Developer',
                'Problem Solver',
                '8 years commercial experience',
                'Vue.js enthusiast',
                'Loves watching sports'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/colours.scss';
@import '~/assets/scss/settings.scss';

.about-me {
    display: flex;
    flex-direction: column;
    background-color: $white;
    color: $secondary-colour;
    font-size: 1.125rem;
}

.about-me--content {
    padding: 1rem;
    .about-me--content--statement {
        h2 {
            font-size: 2rem;
            margin: 0 0 0.5rem 0;
        }
    }
}

.about-me--image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    .about-me--image--me {
        position: relative;
        margin-bottom: 1.25rem;
        img {
            position: relative;
            width: 100%;
            z-index: 1;
        }
        .image--me--background {
            display: none;
            border-radius: 0.625rem;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 10px;
            left: 10px;
            right: 0;
            bottom: 0;
            background-color: $primary-colour;
            z-index: 0;
        }
    }
    .about-me--image--social {
        display: flex;
        justify-content: center;
    }
}

@media (min-width: $breakpoint-medium) {
    .about-me {
        padding: 1rem;
    }

    .about-me--content {
        padding: 0rem;
    }
    .about-me--image {
        margin-bottom: 3rem;
        .about-me--image--me {
            img {
                border-radius: 0.625rem;
            }
            .image--me--background {
                display: block;
            }
        }
    }
}

@media (min-width: $breakpoint-large) {
    .about-me {
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        height: 100vh;
    }

    .about-me--content {
        order: 1;
        .about-me--content--statement {
            margin-bottom: 4.6875rem;
            max-width: 400px;
            h2 {
                font-size: 3rem;
            }
        }
        .about-me--content--list {
            margin-bottom: 3.4375rem;
        }
    }
    .about-me--image {
        align-items: flex-end;
        margin-bottom: 0;
        order: 2;
    }
}
</style>
