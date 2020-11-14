<template>
    <section class="hero">
        <div class="hero--message">
            <h1>Hello. I'm Alex Bowers</h1>
            <div id="heroText" class="hero--message--text"></div>
        </div>
        <transition name="fade">
            <scroll-down v-if="isScrollAnimationVisible"></scroll-down>
        </transition>
    </section>
</template>

<script>
import ScrollDown from './ScrollDown.vue'

export default {
    components: {
        ScrollDown
    },
    data() {
        return {
            currentRowIndex: 0,
            currentRowStringLength: 6,
            finishedRowIndex: 0,
            headerRows: ['Hello.', "I'm Alex Bowers."],
            lastRowContent: '',
            nextCharacterSpeed: 100,
            scrollTextAt: 4,
            textPosition: 0
        }
    },
    computed: {
        isScrollAnimationVisible() {
            return this.finishedRowIndex === this.headerRows.length
        }
    },
    mounted() {
        this.setHeroText()
    },
    methods: {
        setHeroText() {
            const headerElement = document.getElementById('heroText')

            this.lastRowContent = ' '
            this.currentRowIndex = Math.max(
                0,
                this.finishedRowIndex - this.scrollTextAt
            )

            while (this.currentRowIndex < this.finishedRowIndex) {
                this.lastRowContent +=
                    this.headerRows[this.currentRowIndex++] + '<br />'
            }

            headerElement.innerHTML =
                this.lastRowContent +
                this.headerRows[this.finishedRowIndex].substring(
                    0,
                    this.textPosition
                )

            if (this.textPosition < 16) {
                // We don't want the new character effect once all the text has been added.
                headerElement.innerHTML += '|'
            }

            if (this.textPosition++ === this.currentRowStringLength) {
                this.textPosition = 0
                this.finishedRowIndex++
                if (this.finishedRowIndex !== this.headerRows.length) {
                    this.currentRowStringLength = this.headerRows[
                        this.finishedRowIndex
                    ].length
                    setTimeout(() => {
                        this.setHeroText()
                    }, 500)
                }
            } else {
                setTimeout(() => {
                    this.setHeroText()
                }, this.nextCharacterSpeed)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/colours.scss';
@import '~/assets/scss/settings.scss';

.hero {
    display: flex;
    align-items: flex-start;
    position: relative;
    background-color: $primary-colour;
    color: $white;
    height: 100vh;
    width: 100vw;
    z-index: 1;
}

.hero--message {
    margin: 1rem;
    .hero--message--text {
        display: block;
        min-height: 250px;
        font-size: 2.5rem;
        min-height: 100px;
    }
    h1 {
        display: none;
    }
}

@media (min-width: $breakpoint-medium) and (max-width: $breakpoint-large) {
    .hero {
        height: 75vh;
    }
    .hero--message {
        margin: 3rem;
        .hero--message--text {
            font-size: 4rem;
            min-height: 160px;
        }
    }
}

@media (min-width: $breakpoint-large) {
    .hero {
        height: 100vh;
    }
    .hero--message {
        margin: 10%;
        .hero--message--text {
            font-size: 6rem;
            min-height: 240px;
        }
    }
}
</style>
