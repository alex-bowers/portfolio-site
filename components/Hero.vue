<template>
    <section class="hero">
        <div class="hero--container">
            <div class="hero--container--images">
                <div class="images--home">
                    <div id="profileImage" class="images--home--profile">
                        <img
                            src="../assets/images/profile.jpg"
                            alt="Alex's profile Picture"
                            height="202"
                            width="200"
                        />
                    </div>
                    <div id="etihadImage" class="images--home--etihad">
                        <img
                            src="../assets/images/etihad.jpg"
                            alt="Etihad Stadium"
                            height="100"
                            width="100"
                        />
                    </div>
                </div>
                <div class="images--america">
                    <div id="fenwayImage" class="images--america--fenway">
                        <img
                            src="../assets/images/fenway.jpg"
                            alt="Fenway Stadium"
                            height="50"
                            width="50"
                        />
                    </div>
                    <div id="gilletteImage" class="images--america--gillette">
                        <img
                            src="../assets/images/gillette.jpg"
                            alt="Gillette Stadium"
                            height="100"
                            width="75"
                        />
                    </div>
                </div>
            </div>
            <div class="hero--container--text">
                <h1>Alex Bowers</h1>
                <span class="text--quote">
                    “I'm the Lead Developer at Blue Bay Travel.”
                </span>
                <span>Located in Stoke-on-Trent, UK.</span>
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/colours.scss';
@import '~/assets/scss/settings.scss';

.hero--container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.hero--container--images {
    display: flex;
    align-items: flex-end;
}

.images--home,
.images--america {
    position: relative;
    div {
        border: $border-width-small solid $white;
    }
    img {
        display: flex;
        filter: grayscale(1);
        &:hover {
            filter: none;
            opacity: 1;
        }
    }
}

.images--home {
    .images--home--profile {
        margin-bottom: 2rem;
    }
    .images--home--etihad {
        position: absolute;
        bottom: 0;
        right: 0;
    }
}

.images--america {
    display: flex;
    flex-direction: column;
    margin-left: -$border-width-small;
    .images--america--fenway {
        margin-bottom: -$border-width-small;
        width: fit-content;
    }
}

.images--home--etihad,
.images--america--fenway {
    background: $primary-colour;
    position: relative;
    img {
        opacity: 0.6;
    }
}

.hero--container--text {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    background-color: $primary-colour;
    border: $border-width-small solid $white;
    color: $white;
    padding: 2rem;
    width: 220px;
    h1 {
        font-weight: 400;
        line-height: 1;
        margin: 0;
    }
    span {
        font-size: 0.6875rem;
    }
}

@media (orientation: portrait) and (min-width: $breakpoint-small) and (max-width: $breakpoint-small-medium - 1) {
    .images--home {
        .images--home--etihad img {
            height: 120px;
            width: 120px;
        }
        .images--home--profile img {
            height: 253px;
            width: 250px;
        }
    }
    .images--america {
        .images--america--fenway img {
            height: 60px;
            width: 60px;
        }
        .images--america--gillette img {
            height: 120px;
            width: 90px;
        }
    }
    .hero--container--text {
        width: 280px;
        span {
            font-size: 0.8125rem;
        }
    }
}

@media (orientation: portrait) and (min-width: $breakpoint-small-medium) and (max-width: $breakpoint-medium - 1) {
    .images--home {
        .images--home--etihad img {
            height: 130px;
            width: 130px;
        }
        .images--home--profile img {
            height: 281px;
            width: 277px;
        }
    }
    .images--america {
        .images--america--fenway img {
            height: 70px;
            width: 70px;
        }
        .images--america--gillette img {
            height: 130px;
            width: 97px;
        }
    }
    .hero--container--text {
        width: 315px;
        span {
            font-size: 0.875rem;
        }
    }
}

@media (orientation: portrait) and (min-width: $breakpoint-medium) and (max-width: $breakpoint-xlarge - 1) {
    .images--home {
        .images--home--etihad img {
            height: 160px;
            width: 160px;
        }
        .images--home--profile img {
            height: 409px;
            margin-bottom: 3rem;
            width: 404px;
        }
    }
    .images--america {
        .images--america--fenway img {
            height: 80px;
            width: 80px;
        }
        .images--america--gillette img {
            height: 160px;
            width: 120px;
        }
    }
    .hero--container--text {
        width: 465px;
        h1 {
            font-size: 4rem;
        }
        span {
            font-size: 1rem;
        }
    }
}

@media (orientation: landscape) {
    .hero--container {
        align-items: baseline;
        flex-direction: row;
    }
}

@media (orientation: landscape) and (max-width: $breakpoint-large - 1) {
    .images--home {
        .images--home--profile {
            margin-bottom: 0;
        }
        .images--home--etihad {
            display: none;
        }
    }
    .images--america {
        .images--america--fenway,
        .images--america--gillette {
            display: none;
        }
    }
    .hero--container--text {
        margin-left: -3rem;
    }
}

@media (orientation: landscape) and (min-width: $breakpoint-medium) and (max-width: $breakpoint-large - 1) {
    .images--home {
        .images--home--profile {
            margin-bottom: -2rem;
            img {
                height: 281px;
                width: 277px;
            }
        }
    }
    .hero--container--text {
        width: 315px;
        h1 {
            font-size: 3rem;
        }
        span {
            font-size: 0.875rem;
        }
    }
}

@media (orientation: landscape) and (min-width: $breakpoint-large) {
    .images--home {
        .images--home--etihad img {
            height: 160px;
            width: 160px;
        }
        .images--home--profile img {
            height: 409px;
            margin-bottom: 3rem;
            width: 404px;
        }
    }
    .images--america {
        .images--america--fenway img {
            height: 80px;
            width: 80px;
        }
        .images--america--gillette img {
            height: 160px;
            width: 120px;
        }
    }
    .hero--container--text {
        align-items: flex-start;
        margin-left: -2rem;
        padding: 2rem 1rem 2rem 3rem;
        width: 380px;
        .text--quote {
            font-size: 1rem;
        }
        h1 {
            font-size: 4rem;
        }
        span {
            font-size: 0.875rem;
        }
    }
}

@media (min-width: $breakpoint-large) {
    .images--home,
    .images--america {
        div {
            border: $border-width-large solid $white;
        }
    }
    .images--america {
        margin-left: -$border-width-large;
    }
}

@media (min-width: $breakpoint-xlarge) {
    .hero--container {
        align-items: baseline;
        flex-direction: row;
    }
    .images--home {
        .images--home--etihad img {
            height: 200px;
            width: 200px;
        }
        .images--home--profile img {
            height: 511px;
            margin-bottom: 0;
            width: 504px;
        }
    }

    .images--america {
        .images--america--fenway {
            margin-bottom: -$border-width-large;
            img {
                height: 100px;
                width: 100px;
            }
        }
        .images--america--gillette img {
            height: 200px;
            width: 150px;
        }
    }
    .hero--container--text {
        align-items: flex-start;
        padding: 5rem 2rem 1rem;
        margin: 0 0 -5rem -3rem;
        width: 400px;
        .text--quote {
            font-size: 1.25rem;
        }
        h1 {
            font-size: 4rem;
            margin-left: 2rem;
        }
        span {
            font-size: 0.875rem;
        }
    }
}
</style>
