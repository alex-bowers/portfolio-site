<template>
    <svg
        :class="{ 'reverse-colours': isOnPrimaryColour }"
        class="social-contact-svg"
        fill="none"
        height="50"
        role="img"
        viewBox="0 0 50 50"
        width="50"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>{{ title }}</title>
        <path
            d="M43.75 50H6.25C2.8 50 0 47.2 0 43.75V6.25C0 2.8 2.8 0 6.25 0H43.75C47.2 0 50 2.8 50 6.25V43.75C50 47.2 47.2 50 43.75 50Z"
            class="icon-background"
        />
        <path
            d="M19.188 37.7001C30.9755 37.7001 37.4255 27.925 37.4255 19.4625C37.4255 19.1875 37.4255 18.9125 37.413 18.6375C38.663 17.7375 39.7505 16.6 40.613 15.3125C39.463 15.825 38.2255 16.1625 36.9255 16.325C38.2505 15.5375 39.263 14.275 39.7505 12.775C38.513 13.5125 37.138 14.0375 35.6755 14.325C34.5005 13.075 32.838 12.3 31.0005 12.3C27.463 12.3 24.588 15.175 24.588 18.7125C24.588 19.2125 24.6505 19.7 24.7505 20.175C19.4255 19.9125 14.7005 17.35 11.538 13.475C10.988 14.425 10.6755 15.525 10.6755 16.7C10.6755 18.925 11.813 20.8875 13.5255 22.0375C12.4755 22 11.488 21.7125 10.6255 21.2375V21.325C10.6255 24.425 12.838 27.0251 15.763 27.6126C15.2255 27.7626 14.663 27.8375 14.0755 27.8375C13.663 27.8375 13.263 27.8 12.8755 27.725C13.688 30.275 16.063 32.125 18.863 32.175C16.663 33.9 13.9005 34.925 10.9005 34.925C10.388 34.925 9.87549 34.9 9.37549 34.8375C12.2005 36.6375 15.5755 37.7001 19.188 37.7001Z"
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
