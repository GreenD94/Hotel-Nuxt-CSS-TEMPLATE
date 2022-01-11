export const state = () => ({
  users: []
})

export const mutations = {
  setUsers (state, users) {
    console.log('setUsers')
    state.users = users
  }
}

export const actions = {
  async getUsers ({ commit }) {
    let response = {}

    try {
      response = await this.$axios.$get('/user')
      commit('setUsers', response.data)
    } catch (error) {}
    return response
  },

  async storeUser ({ dispatch }, user) {
    let response = {}

    try {
      response = await this.$axios.$post('/user', user)
      dispatch('getUsers')
    } catch (error) {}
    return response
  },

  async deleteUser ({ dispatch }, id) {
    let response = await this.$axios.$delete('/user', { data: { id: id } })
    dispatch('getUsers')
    return response
  }
}

export const getters = {
  // ...
  users: (state, getters) => {
    return state.users
  }
}
