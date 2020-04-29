<template>
    <div>
        <a
            :class="{ 'no-end-padding': $props.hasNoPaddingOnEnds }"
            :href="profiles.linkedin"
            :style="{ padding: $props.padding }"
            rel="noopener"
            target="_blank"
        >
            <img
                alt="Alex's LinkedIn Link"
                src="../../assets/images/linkedin.svg"
            />
        </a>
        <a
            :class="{ 'no-end-padding': $props.hasNoPaddingOnEnds }"
            :href="profiles.github"
            :style="{ padding: $props.padding }"
            rel="noopener"
            target="_blank"
        >
            <img
                alt="Alex's GitHub Link"
                src="../../assets/images/github.svg"
            />
        </a>
        <a
            :class="{ 'no-end-padding': $props.hasNoPaddingOnEnds }"
            :href="profiles.twitter"
            :style="{ padding: $props.padding }"
            rel="noopener"
            target="_blank"
        >
            <img
                alt="Alex's Twitter Link"
                src="../../assets/images/twitter.svg"
            />
        </a>
    </div>
</template>

<script>
export default {
    props: {
        hasNoPaddingOnEnds: {
            default: false,
            type: Boolean
        },
        padding: {
            default: '5px',
            type: String
        }
    },
    data() {
        return {
            profiles: {
                github: 'https://github.com/alex-bowers',
                linkedin: 'https://www.linkedin.com/in/alex-bowers-15874354/',
                twitter: 'https://twitter.com/alex_bowers'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.no-end-padding {
    &:first-child {
        padding-left: 0px !important;
    }
    &:last-child {
        padding-right: 0px !important;
    }
}
</style>
