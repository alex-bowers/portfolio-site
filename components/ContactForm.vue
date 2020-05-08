<template>
    <div class="contact-form--container">
        <div v-if="hasEmailSent" class="contact-form--result">
            <div v-if="emailSentStatus === 'success'">
                <p><strong>Thank you for contacting me.</strong></p>
                <p>I will reply as soon as I can.</p>
            </div>
            <div v-if="emailSentStatus === 'failed'">
                <p>
                    <strong
                        >Unfortunately this email has failed to send.
                    </strong>
                </p>
                <p>
                    <!-- eslint-disable-next-line prettier/prettier -->
                    Please try to contact me by using one of my social links below.
                </p>
            </div>
        </div>
        <form
            v-if="!hasEmailSent"
            class="contact-form"
            name="contact"
            @submit.prevent="sendEmail"
        >
            <h3>Contact me.</h3>
            <div
                class="field-with-floating-input"
                :class="{ 'is-focused': focus.name }"
            >
                <label>Name</label>
                <input
                    v-model="formData.name"
                    name="user_name"
                    type="text"
                    @blur="toggleLabelFocus('name')"
                    @focus="toggleLabelFocus('name')"
                />
            </div>
            <div
                class="field-with-floating-input"
                :class="{ 'is-focused': focus.email }"
            >
                <label>Email address</label>
                <input
                    v-model="formData.email"
                    name="user_email"
                    type="email"
                    @blur="toggleLabelFocus('email')"
                    @focus="toggleLabelFocus('email')"
                />
            </div>
            <div
                class="field-with-floating-input"
                :class="{ 'is-focused': focus.message }"
            >
                <label>Message</label>
                <textarea
                    v-model="formData.message"
                    name="message"
                    rows="5"
                    @blur="toggleLabelFocus('message')"
                    @focus="toggleLabelFocus('message')"
                ></textarea>
            </div>
            <button
                class="contact-button"
                :disabled="isEmailSending"
                type="submit"
            >
                Send
            </button>
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
    data() {
        return {
            emailSentStatus: null,
            focus: {
                email: false,
                message: false,
                name: false
            },
            formData: {
                email: '',
                message: '',
                name: ''
            },
            hasEmailSent: false,
            isEmailSending: false
        }
    },
    computed: {
        enviromentVariables() {
            return {
                service: process.env.EMAIL_SERVICE,
                template: process.env.EMAIL_TEMPLATE,
                user: process.env.EMAIL_USER
            }
        }
    },
    methods: {
        sendEmail(e) {
            this.isEmailSending = true
            emailjs
                .sendForm(
                    this.enviromentVariables.service,
                    this.enviromentVariables.template,
                    e.target,
                    this.enviromentVariables.user
                )
                .then(
                    (result) => {
                        this.emailSentStatus = 'success'
                    },
                    // eslint-disable-next-line handle-callback-err
                    (error) => {
                        this.emailSentStatus = 'failed'
                    }
                )
        },
        toggleLabelFocus(type) {
            if (!this.formData[type]) {
                this.focus[type] = !this.focus[type]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/colours.scss';

.contact-form--container {
    max-width: 500px;
    width: 100%;
}

.contact-form {
    display: flex;
    flex-direction: column;
    color: $secondary-colour;
    margin: 5rem 0;
}

.contact-form--result {
    text-align: center;
    background-color: $secondary-colour;
    color: $white;
    padding: 2rem 1rem;
    border-radius: 5px;
    margin: 5rem 0;
}

.field-with-floating-input {
    position: relative;
    input,
    textarea {
        border: 0;
        color: $secondary-colour;
        padding: 3px 0;
        border-bottom: 2px solid $secondary-colour;
        box-shadow: none;
        font-family: inherit;
        font-size: inherit;
        outline: 0;
        width: 100%;
    }
    input {
        position: absolute;
        background-color: transparent;
        left: 0;
    }
    textarea {
        background-color: lighten($tertiary-colour, 10%);
        box-sizing: border-box;
        padding: 1rem;
        resize: vertical;
    }
    label {
        opacity: 0.5;
        pointer-events: none;
        position: absolute;
        left: 0.5rem;
        transform: translate3d(0, 0, 0) scale(1);
        transform-origin: left top;
        transition: 100ms;
    }
    + .field-with-floating-input {
        margin-top: 4rem;
    }
    &.is-focused {
        label {
            transform: translateY(-1.25rem) translateX(-0.5rem) scale(0.8);
        }
    }
}

button {
    &:hover {
        border-color: $secondary-colour;
        color: $secondary-colour;
    }
}
</style>
