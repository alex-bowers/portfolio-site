export default {
    props: {
        // eslint-disable-next-line
        observer: {
            default: null
        }
    },
    watch: {
        observer(value) {
            if (value) {
                this.$el
                    .querySelectorAll('.animate-element')
                    .forEach((element) => {
                        this.observer.observe(element)
                    })
            }
        }
    }
}
