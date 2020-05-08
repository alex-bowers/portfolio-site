<template>
    <section class="day-job">
        <div class="day-job--content">
            <div class="day-job--content--text">
                <h2>Day Job.</h2>
                <p>I have worked at Blue Bay Travel since November 2012.</p>
                <p>
                    <!-- eslint-disable-next-line prettier/prettier -->
                    I manage a small team of developers and we are responsible for four customer facing websites and a number of internal web applications.
                </p>
                <p>
                    <!-- eslint-disable-next-line prettier/prettier -->
                    I focus on improving the user experience and product performance on all of our projects. By designing and developing new features that concider both the customer and employee journeys.
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
    position: relative;
    background-color: $white;
    color: $secondary-colour;
    font-size: 1.125rem;
    padding: 1rem 1rem 3rem 1rem;
    z-index: 1;
}

.day-job--content {
    padding: 1rem;
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
            background-color: $secondary-colour;
        }
    }
    .day-job-images--one {
        img {
            z-index: 1;
        }
        .image--background {
            z-index: 0;
        }
    }
    .day-job-images--two {
        position: absolute;
        top: 150px;
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
        justify-content: space-around;
        padding: 0rem 2rem 24.375rem 2rem;
    }

    .day-job--content {
        order: 2;
        .day-job--content--text {
            max-width: 400px;
            h2 {
                font-size: 4rem;
            }
        }
    }

    .day-job--images {
        display: block;
        order: 1;
    }
}

@media (min-width: $breakpoint-xlarge) {
    .day-job--content {
        .day-job--content--text {
            max-width: 500px;
            h2 {
                font-size: 4.5rem;
            }
        }
    }
    .day-job--images {
        .day-job-images--two {
            right: -100px;
        }
    }
}

@media (min-width: $breakpoint-xxlarge) {
    .day-job {
        justify-content: center;
    }

    .day-job--content {
        margin-left: 15rem;
        .day-job--content--text {
            max-width: 550px;
            h2 {
                font-size: 5rem;
            }
        }
    }
}
</style>
