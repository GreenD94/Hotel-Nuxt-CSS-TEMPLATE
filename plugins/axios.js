export default function ({ $axios, redirect, store }) {
  $axios.onRequest(config => {
    store.commit('setLoading', true)
  })

  $axios.onResponse(config => {
    store.commit('setLoading', false)
  })

  $axios.onError(error => {
    store.commit('setLoading', false)
    store.commit('setErrorMessage', error.message)
    store.commit('setAlertDangerVisible', true)
  })
}
