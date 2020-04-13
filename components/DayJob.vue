<template>
    <section class="day-job">
        <div class="day-job--content">
            <div class="day-job--content--text">
                <h2>Day Job.</h2>
                <p>I have worked at Blue Bay Travel since November 2012.</p>
                <p>
                    <!-- eslint-disable-next-line prettier/prettier -->
                    Myself and the rest of the development team are resonsibly for four customer facing websites and a number of internal web applications.
                </p>
                <p>
                    <!-- eslint-disable-next-line prettier/prettier -->
                    My focus is to improve the user experience. I design and develop new features where I have to concider both the customer and emploee journeys.
                </p>
            </div>
            <div class="day-job--content--stack">
                <h3>Typical Stack...</h3>
                <ul>
                    <li v-for="(items, type) in stack" :key="type">
                        {{ createListItem(type, items) }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="day-job--images">
            <div class="day-job-images--one">
                <img
                    src="../assets/images/warehouse.jpg"
                    alt="Caribbean Warehouse Screenshot"
                />
                <div class="image--background"></div>
            </div>
            <div class="day-job-images--two">
                <img
                    src="../assets/images/xclusivity.jpg"
                    alt="Xclusivity Screenshot"
                />
                <div class="image--background"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            websiteLinks: {
                warehouse: 'https://caribbeanwarehouse.co.uk/',
                xclsuivity: 'https://xclusivity.co.uk/'
            },
            stack: {
                languages: ['JavaScript', 'PHP', 'HTML', 'CSS'],
                frameworks: ['Vue.js', 'Laravel'],
                database: ['MySQL']
            }
        }
    },
    methods: {
        capitalise(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        },
        createListItem(type, items) {
            return `${this.capitalise(type)}: ${this.stringifyStack(items)}`
        },
        stringifyStack(items) {
            if (items.length > 1) {
                return [items.slice(0, -1).join(', '), items.slice(-1)[0]].join(
                    items.length < 2 ? '' : ' and '
                )
            }
            return items
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/colours.scss';
@import '~/assets/scss/settings.scss';

.day-job {
    display: flex;
    flex-direction: column;
    background-color: $white;
    color: $secondary-colour;
    font-size: 1.125rem;
    padding: 1rem;
}

.day-job--content {
    .day-job--content--text {
        h2 {
            font-size: 2rem;
            margin: 0 0 0.5rem 0;
        }
    }
    .day-job--content--stack {
        ul {
            list-style: none;
            padding: 0;
        }
    }
}

.day-job--images {
    display: none;
    position: relative;
    .day-job-images--one,
    .day-job-images--two {
        position: relative;
        margin-bottom: 1.25rem;
        img {
            position: relative;
            border-radius: 0.625rem;
            width: 100%;
        }
        .image--background {
            border-radius: 0.625rem;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 10px;
            left: -10px;
            right: 0;
            bottom: 0;
            background-color: $primary-colour;
        }
    }
    .day-job-images--one {
        top: -100px;
        left: -50px;
        img {
            z-index: 1;
        }
        .image--background {
            z-index: 0;
        }
    }
    .day-job-images--two {
        position: absolute;
        top: 100px;
        right: -50px;
        img {
            z-index: 4;
        }
        .image--background {
            z-index: 3;
        }
    }
}

@media (min-width: $breakpoint-large) {
    .day-job {
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        padding: 5rem 1rem 10rem 1rem;
    }

    .day-job--content {
        order: 2;
        .day-job--content--text {
            max-width: 400px;
            h2 {
                font-size: 3rem;
                margin: 0 0 0.5rem 0;
            }
        }
    }

    .day-job--images {
        display: block;
        order: 1;
    }
}
</style>
