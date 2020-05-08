<template>
    <section class="about-me content-container">
        <div class="about-me--image">
            <div class="about-me--image--with-background">
                <img src="../assets/images/profile.jpg" alt="Profile Picture" />
                <div class="image-background--secondary left-align"></div>
            </div>
            <div class="about-me--image--social">
                <social-links
                    :has-no-padding-on-ends="true"
                    padding="10px"
                ></social-links>
            </div>
        </div>
        <div class="about-me--content">
            <div class="content-container--text">
                <h2>I'm the Lead Developer at Blue Bay Travel.</h2>
                <div>Located in Stoke-on-Trent, UK.</div>
            </div>
            <div class="content-container--list">
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

.about-me--content {
    padding: 2rem;
}

.about-me--image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    .about-me--image--with-background {
        position: relative;
        margin-bottom: 1.25rem;
        img {
            position: relative;
            width: 100%;
            z-index: 1;
        }
        .image-background--secondary {
            display: none;
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
        padding: 1rem;
    }
    .about-me--image {
        margin-bottom: 3rem;
        .about-me--image--with-background {
            img {
                border-radius: 0.625rem;
            }
        }
    }
}

@media (min-width: $breakpoint-large) {
    .about-me {
        padding: 15rem 2rem;
    }
    .about-me--content {
        order: 1;
        .content-container--text {
            margin-bottom: 4.6875rem;
            max-width: 550px;
        }
        .content-container--list {
            margin-bottom: 3.4375rem;
        }
    }
    .about-me--image {
        align-items: flex-end;
        margin-bottom: 0;
        order: 2;
        .about-me--image--with-background {
            .image-background--secondary {
                display: block;
            }
        }
    }
}

@media (min-width: $breakpoint-xxlarge) {
    .about-me--content {
        .content-container--text {
            margin-right: 10rem;
        }
    }
}
</style>
