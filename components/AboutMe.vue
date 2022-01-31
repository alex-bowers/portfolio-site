<template>
    <section class="about-me">
        <div class="about-me--container">
            <div class="about-me--container--column animate-element">
                <h2>About Me</h2>
                <ul class="numbered-list">
                    <li
                        v-for="(item, itemIndex) in tldrSection"
                        :key="itemIndex"
                    >
                        {{ item }}
                    </li>
                </ul>
            </div>
            <div class="about-me--container--row animate-element">
                <div class="row--category">
                    <h3>Qualifications</h3>
                    <ul class="dash-list">
                        <li
                            v-for="(item, itemIndex) in qualifications"
                            :key="itemIndex"
                        >
                            - {{ item }}
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Typical Stack</h3>
                    <ul class="dash-list">
                        <li v-for="(item, itemIndex) in stack" :key="itemIndex">
                            - {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="about-me--container--row animate-element">
                <div class="row--category">
                    <h3>Personal Projects</h3>
                    <ul class="dash-list">
                        <li
                            v-for="(item, itemIndex) in projects"
                            :key="itemIndex"
                            class="row--category--link"
                        >
                            - <a :href="item.link">{{ item.name }}</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Online Profiles</h3>
                    <ul class="dash-list">
                        <li
                            v-for="(item, itemIndex) in profiles"
                            :key="itemIndex"
                            class="row--category--link"
                        >
                            - <a :href="item.link">{{ item.name }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ObserverMixin from '~/mixins/observer.js'

export default {
    mixins: [ObserverMixin],
    data() {
        return {
            profiles: [
                {
                    name: 'LinkedIn',
                    link: 'https://www.linkedin.com/in/alex-bowers-15874354/'
                },
                {
                    name: 'Twitter',
                    link: 'https://twitter.com/alex_bowers'
                }
            ],
            projects: [
                {
                    name: 'GitHub',
                    link: 'https://github.com/alex-bowers'
                },
                {
                    name: 'CodePen',
                    link: 'https://codepen.io/alex-bowers'
                }
            ],
            qualifications: [
                'Mental Health First Aid',
                'BSc Applied IT, First-Class Honours',
                'Level 3 Certificate in Leadership & Management'
            ],
            stack: [
                'Languages: JavaScript, PHP, HTML and CSS',
                'Frameworks: Vue.js and Laravel',
                'Database: MySQL'
            ]
        }
    },
    computed: {
        tldrSection() {
            return [
                'Full Stack Developer',
                'Problem Solver',
                `${this.yearsDeveloping} years commercial experience`,
                'Loves watching sports',
                'Has a stammer'
            ]
        },
        yearsDeveloping() {
            return new Date().getFullYear() - 2012
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/colours.scss';
@import '~/assets/scss/settings.scss';

.about-me--container {
    color: $secondary-colour;
    padding: 0 1rem;
    max-width: 1200px;
    width: 100%;
}

h2,
h3 {
    margin-bottom: 0.5rem;
}

ul {
    font-size: 0.875rem;
    margin-top: 0;
    margin-bottom: 2rem;
}

.dash-list {
    list-style-type: none;
    padding-left: 0;
    .row--category--link + .row--category--link {
        margin-top: 0.5rem;
    }
}

.numbered-list {
    list-style: decimal;
    padding-left: 1.125rem;
}

@media (min-width: $breakpoint-small-medium) {
    ul {
        font-size: 1rem;
    }
}

@media (orientation: portrait) and (min-width: $breakpoint-medium),
    (orientation: landscape) and (min-width: $breakpoint-large) {
    h3 {
        font-size: 2rem;
    }
    .about-me--container {
        padding: 0 3rem;
    }
    .about-me--container--column {
        margin-bottom: 5rem;
    }
    .about-me--container--row {
        display: flex;
        flex-direction: row;
        .row--category {
            width: 50%;
        }
    }
}

@media (min-width: $breakpoint-xlarge) {
    ul {
        font-size: 1.25rem;
    }
}

@media (min-width: $breakpoint-xxlarge) {
    .about-me--container {
        max-width: 1400px;
    }
}
</style>
