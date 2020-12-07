<template>
    <section class="contact-me">
        <div class="contact-me--container">
            <div v-if="hasUserTriedToSentEmail" class="contact-me--result">
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
                v-if="!hasUserTriedToSentEmail"
                class="contact-me--form"
                name="contact-me"
                @submit.prevent="sendEmail"
            >
                <h2>Contact me</h2>
                <div
                    class="field-with-floating-input"
                    :class="{ 'is-focused': focus.name }"
                >
                    <label for="nameField">
                        Name
                        <span class="field-with-floating-input--required">
                            - required
                        </span>
                    </label>
                    <input
                        id="nameField"
                        v-model="formData.name"
                        name="user_name"
                        type="text"
                        required
                        @blur="toggleLabelFocus('name')"
                        @focus="toggleLabelFocus('name')"
                    />
                </div>
                <div
                    class="field-with-floating-input"
                    :class="{ 'is-focused': focus.email }"
                >
                    <label for="emailField">
                        Email address
                        <span class="field-with-floating-input--required">
                            - required
                        </span>
                    </label>
                    <input
                        id="emailField"
                        v-model="formData.email"
                        name="user_email"
                        type="email"
                        required
                        @blur="toggleLabelFocus('email')"
                        @focus="toggleLabelFocus('email')"
                    />
                </div>
                <div
                    class="field-with-floating-input"
                    :class="{ 'is-focused': focus.message }"
                >
                    <label for="messageField">Message</label>
                    <textarea
                        id="messageField"
                        v-model="formData.message"
                        name="message"
                        rows="5"
                        @blur="toggleLabelFocus('message')"
                        @focus="toggleLabelFocus('message')"
                    ></textarea>
                </div>
                <div class="contact-me--form--button">
                    <button
                        :class="{
                            'contact-button--loading': isEmailSending
                        }"
                        :disabled="isEmailSending"
                        class="contact-button"
                        type="submit"
                    >
                        {{ buttonText }}
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

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
            hasUserTriedToSentEmail: false,
            isEmailSending: false
        }
    },
    computed: {
        buttonText() {
            return this.isEmailSending ? 'Email is sending' : 'Send'
        },
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
            if (this.formData.name === '' || this.formData.email === '') {
                return false
            }

            this.isEmailSending = true
            axios
                .post('https://api.emailjs.com/api/v1.0/email/send', {
                    service_id: this.enviromentVariables.service,
                    template_id: this.enviromentVariables.template,
                    user_id: this.enviromentVariables.user,
                    template_params: {
                        user_name: this.formData.name,
                        user_email: this.formData.email,
                        message: this.formData.message
                    }
                })
                .then(() => {
                    this.hasUserTriedToSentEmail = true
                    this.emailSentStatus = 'success'
                })
                .catch(() => {
                    this.hasUserTriedToSentEmail = true
                    this.emailSentStatus = 'failed'
                })
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
@import '~/assets/scss/settings.scss';

.contact-me {
    display: flex;
    justify-content: center;
    background-color: $primary-colour;
    padding: 4rem 1rem;
    position: relative;
    z-index: 1;
}

.contact-me--container {
    max-width: 500px;
    width: 100%;
}

.contact-me--result {
    text-align: center;
    background-color: $primary-colour;
    color: $white;
    padding: 2rem 1rem;
    border-radius: 5px;
    margin-bottom: 5rem;
}

.contact-me--form {
    display: flex;
    flex-direction: column;
    color: $white;
    h2 {
        margin-top: 0;
    }
    .contact-me--form--button {
        text-align: right;
        button {
            border-color: $white;
            color: $white;
            width: 185px;
            &:hover {
                border-color: darken($white, 15%);
                color: darken($white, 15%);
            }
            &.contact-button--loading {
                &:hover {
                    border-color: $white;
                    color: $white;
                }
            }
        }
    }
}

.field-with-floating-input {
    position: relative;
    .field-with-floating-input--required {
        font-size: 0.75rem;
    }
    input,
    textarea {
        border: 0;
        color: $white;
        padding: 3px 0;
        border-bottom: 2px solid $white;
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
        background-color: $primary-colour;
        box-sizing: border-box;
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

@media (min-width: $breakpoint-medium) {
    .contact-me {
        padding: $padding-medium-breakpoint;
    }
}

@media (min-width: $breakpoint-large) {
    .contact-me {
        padding: $padding-large-breakpoint;
    }
    .contact-me--container {
        flex-direction: row;
    }
}
</style>
