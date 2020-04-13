<template>
    <div class="happy-dev">
        <div class="happy-dev--container">
            <img src="../assets/images/happy-dev.svg" alt="Happy Dev Logo" />
            <div class="happy-dev--content">
                <div class="happy-dev--content--text">
                    <p>
                        <!-- eslint-disable-next-line prettier/prettier -->
                        On February 12th 2020 I appeared on the Happy Dev podcast. Hosted by Laravel’s James Brooks.
                    </p>
                    <p>
                        <!-- eslint-disable-next-line prettier/prettier -->
                        We discussed my stammer and how that has impacted my health and both my personal and professional life.
                    </p>
                </div>
                <a :href="episodeLink" class="episode-button">Find Episode</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            episodeLink: 'https://www.happydev.fm/8'
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/colours.scss';
@import '~/assets/scss/settings.scss';

.happy-dev {
    display: flex;
    justify-content: center;
    background-color: $secondary-colour;
    color: $white;
    font-size: 1rem;
    padding: 4rem 3rem;
}

.happy-dev--container {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        margin-bottom: 2rem;
        max-width: 200px;
    }
}

.happy-dev--content {
    .happy-dev--content--text {
        margin-bottom: 3rem;
    }
    .episode-button {
        background: transparent;
        border: 1px $white solid;
        color: $white;
        cursor: pointer;
        font-size: 1rem;
        padding: 1rem 2rem;
        margin-top: 1rem;
        &:hover {
            border-color: $primary-colour;
            color: $primary-colour;
        }
    }
}

@media (min-width: $breakpoint-medium) {
    .happy-dev {
        padding: 4rem;
    }
    .happy-dev--container {
        flex-direction: row;
        max-width: 900px;
        img {
            margin-bottom: 0;
            margin-right: 5rem;
            max-width: 250px;
        }
    }
}

@media (min-width: $breakpoint-large) {
    .happy-dev {
        padding: 5rem 2rem;
    }
    .happy-dev--container {
        img {
            margin-right: 10rem;
        }
    }
}
</style>
