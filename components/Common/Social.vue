<template>
    <div>
        <a
            :class="{ 'no-end-padding': $props.hasNoPaddingOnEnds }"
            :href="profiles.linkedin"
            :style="{ padding: $props.padding }"
            aria-label="LinkedIn"
            rel="noopener"
            target="_blank"
        >
            <linkedin-icon
                :is-on-primary-colour="$props.isOnPrimaryColour"
                title="Alex's LinkedIn Icon"
            ></linkedin-icon>
        </a>
        <a
            :class="{ 'no-end-padding': $props.hasNoPaddingOnEnds }"
            :href="profiles.github"
            :style="{ padding: $props.padding }"
            aria-label="GitHub"
            rel="noopener"
            target="_blank"
        >
            <github-icon
                :is-on-primary-colour="$props.isOnPrimaryColour"
                title="Alex's GitHub Icon"
            ></github-icon>
        </a>
        <a
            :class="{ 'no-end-padding': $props.hasNoPaddingOnEnds }"
            :href="profiles.twitter"
            :style="{ padding: $props.padding }"
            aria-label="Twitter"
            rel="noopener"
            target="_blank"
        >
            <twitter-icon
                :is-on-primary-colour="$props.isOnPrimaryColour"
                title="Alex's Twitter Icon"
            ></twitter-icon>
        </a>
    </div>
</template>

<script>
import GithubIcon from './SocialGitHub.vue'
import LinkedinIcon from './SocialLinkedIn.vue'
import TwitterIcon from './SocialTwitter.vue'

export default {
    components: {
        GithubIcon,
        LinkedinIcon,
        TwitterIcon
    },
    props: {
        hasNoPaddingOnEnds: {
            default: false,
            type: Boolean
        },
        isOnPrimaryColour: {
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
