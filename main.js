import sgMail from '@sendgrid/mail'

const contactFormFieldIds = ['nameField', 'emailField', 'messageField'],
    contactFormFieldEvents = ['blur', 'focus']
const observer = new IntersectionObserver(onElementObserved, {
    threshold: 0.2
})

document.getElementById('aboutMeYearsExperience').innerText = getYearsCount()

function getYearsCount() {
  const currentYear = new Date().getFullYear(),
    yearIStartedToWork = 2012

  return currentYear - yearIStartedToWork
}

document.querySelectorAll('.animate-element')
    .forEach((element) => {
        observer.observe(element)
    })

function onElementObserved(entries) {
    entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) {
            return
        }

        target.classList.add('make-visible')

        observer.unobserve(target)
    })
}

setContactFormInputs(contactFormFieldIds, contactFormFieldEvents)

function setContactFormInputs(elements, events) {
    elements.forEach((fieldName) => {
        const field = document.getElementById(fieldName)
        events.forEach(event => {
            field.addEventListener(event, handleContactFormInputEvents)
        })
    })
}

function handleContactFormInputEvents(event) {
    const { target, type } = event,
        parentElement = target.parentElement,
        isFieldEmpty = target.value === ''

    if (type === 'blur' && isFieldEmpty) {
        parentElement.classList.remove('is-focused')
    } else if (type === 'focus') {
        parentElement.classList.add('is-focused')
    }
}


document.getElementById('contactForm')
    .addEventListener('submit', (event) => {
        event.preventDefault()
        const nameValue = document.getElementById('nameField').value,
            emailValue = document.getElementById('emailField').value,
            messageValue = document.getElementById('messageField').value

        sendEmail(nameValue, emailValue,  messageValue)
          .then((response) => {
            updateContactResultElement(response)
          })
    })

async function sendEmail(name, email, message) {
    try {
        const response = await fetch(`${import.meta.env.VITE_DOMAIN}/.netlify/functions/contact-form-mail`, {
            method: 'POST',
            body: JSON.stringify({
                name, email, message
            })
        })

        const result = await response.json()
        console.log(result);

        return {
            statusCode: 200,
            message: {
              body: 'Thank you for contacting me.',
              title: 'I will reply as soon as I can.'
            }
        }
    } catch (error) {
        return {
            statusCode: 422,
            error,
            message: {
              body: 'Please try to contact me by using one of my social links below.',
              title: 'Unfortunately this email has failed to send.'
            }
        }
    }
}

function updateContactResultElement(response) {
  document.getElementById('contactResultTitle').innerText = response.message.title
  document.getElementById('contactResultBody').innerText = response.message.body
  document.getElementById('contactResult').style.display = 'block'
  document.getElementById('contactForm').style.display = 'none'
}
