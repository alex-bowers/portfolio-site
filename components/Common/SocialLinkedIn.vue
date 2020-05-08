<template>
    <svg
        :class="{ 'reverse-colours': isOnPrimaryColour }"
        fill="none"
        height="50"
        role="img"
        viewBox="0 0 50 50"
        width="50"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>{{ title }}</title>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M50 6.25C50 2.80049 47.1995 0 43.75 0H6.25C2.80049 0 0 2.80049 0 6.25V43.75C0 47.1995 2.80049 50 6.25 50H43.75C47.1995 50 50 47.1995 50 43.75V6.25Z"
            class="icon-background"
        />
        <path
            d="M14.332 17.4438H5.95703V42.6355H14.332V17.4438Z"
            fill="white"
        />
        <path
            d="M10.2062 5.29785C7.34092 5.29785 5.46875 7.18164 5.46875 9.65068C5.46875 12.0679 7.28398 14.0036 10.0954 14.0036H10.1495C13.0697 14.0036 14.8874 12.0679 14.8874 9.65068C14.8332 7.18164 13.0699 5.29785 10.2062 5.29785Z"
            fill="white"
        />
        <path
            d="M34.8891 16.8578C30.4467 16.8578 28.4568 19.3009 27.3426 21.0169V17.4502H18.9697C19.0808 19.8132 18.9697 42.6417 18.9697 42.6417H27.3425V28.5729C27.3425 27.8199 27.3966 27.0671 27.6186 26.5289C28.2229 25.025 29.6015 23.4672 31.9147 23.4672C34.9433 23.4672 36.1565 25.7781 36.1565 29.1632V42.6417H44.5297V28.1954C44.5297 20.4574 40.3983 16.8578 34.8891 16.8578Z"
            fill="white"
        />
    </svg>
</template>

<script>
export default {
    props: {
        isOnPrimaryColour: {
            default: false,
            type: Boolean
        },
        title: {
            default: 'Social media icon',
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/colours.scss';

svg {
    &.reverse-colours {
        &:hover {
            .icon-background {
                fill: $tertiary-colour;
            }
        }
    }
    &:not(.reverse-colours) {
        &:hover {
            .icon-background {
                fill: $primary-colour;
            }
        }
    }
    .icon-background {
        fill: $secondary-colour;
    }
}
</style>
