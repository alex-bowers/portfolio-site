<template>
    <section class="happy-dev">
        <div class="happy-dev--container">
            <img src="../assets/images/happy-dev.png" alt="Happy Dev Logo" />
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
                <a
                    :href="episodeLink"
                    aria-label="Happy Dev"
                    class="episode-button"
                    rel="noopener"
                    target="_blank"
                >
                    Find Episode
                </a>
            </div>
        </div>
    </section>
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
    position: relative;
    background-color: $happy-dev-primary;
    color: $happy-dev-secondary;
    font-size: 1rem;
    padding: $padding-small-breakpoint;
    z-index: 1;
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
    display: flex;
    flex-direction: column;
    .episode-button {
        border-color: $happy-dev-secondary;
        color: $happy-dev-secondary;
        &:hover {
            border-color: lighten($happy-dev-secondary, 35%);
            color: lighten($happy-dev-secondary, 35%);
        }
    }
}

@media (min-width: $breakpoint-medium) {
    .happy-dev {
        padding: $padding-medium-breakpoint;
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
    .happy-dev--content {
        .episode-button {
            max-width: 150px;
        }
    }
}

@media (min-width: $breakpoint-large) {
    .happy-dev {
        padding: $padding-large-breakpoint;
    }
    .happy-dev--container {
        img {
            margin-right: 10rem;
        }
    }
}
</style>
