import { mapActions, mapGetters } from 'vuex'
export default {
  middleware ({ $routeCan }) {
    $routeCan('read')
  },
  data () {
    return {}
  },
  async created () {
    console.log(this.getUsers())
    this.getUsers()
  },
  methods: {
    ...mapActions({
      getUsers: 'users/getUsers',
      deleteUser: 'users/deleteUser'
    })
  },
  computed: {
    ...mapGetters({
      users: 'users/users'
    })
  }
}
