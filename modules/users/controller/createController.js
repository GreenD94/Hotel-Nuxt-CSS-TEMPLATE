import { mapActions } from 'vuex'
export default {
  data () {
    return {
      input: {
        first_name: '',
        last_name: '',
        phone: '',
        email: ''
      }
    }
  },
  methods: {
    ...mapActions({
      storeUser: 'users/storeUser'
    }),
    async store () {
      let response = await this.storeUser(this.input)
      if ((response.code = 200)) {
        this.$router.push('/user')
      }
    }
  },
  computed: {
    isValidFirstName () {
      return this.input.first_name.length >= 4
    },
    firstnameValidationMessage () {
      if (this.input.first_name.length > 0) {
        return 'ingrese almenos 4 letras'
      }
      return 'profavor escribe algo.'
    },

    isValidLastName () {
      return this.input.last_name.length >= 4
    },
    lastNameValidationMessage () {
      if (this.input.last_name.length > 0) {
        return 'ingrese almenos 4 letras'
      }
      return 'profavor escribe algo.'
    },

    isValidPhone () {
      return this.input.phone.length >= 4 && !isNaN(this.input.phone)
    },
    phoneValidationMessage () {
      if (this.input.phone.length > 0) {
        return 'ingrese almenos 4 letras'
      }
      if (isNaN(this.input.phone)) {
        return 'ingrese solo numeros'
      }
      return 'profavor escribe algo.'
    },

    isValidEmail () {
      return this.input.email.length >= 4
    },
    emailValidationMessage () {
      if (this.input.email.length > 0) {
        return 'ingrese almenos 4 letras'
      }
      return 'profavor escribe algo.'
    }
  }
}
