<template>
  <div v-if="isLoading" class="loading-page">
    <div class="blurBackground"></div>
    <div class="loading"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    loading: true,
  }),
  methods: {
    // start() {
    //   this.loading = true;
    // },
    // finish() {
    //   this.loading = false;
    // },
  },
  computed: { ...mapGetters(["isLoading"]) },
};
</script>
<style scoped>
.loading-page {
  position: fixed;
  top: 0vh;
  right: 0vw;
  height: 100vh;
  width: 100vw;
  z-index: 9000;
  padding: 1rem;
  text-align: center;
  font-size: 3rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.blurBackground {
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
  background-color: rgb(203, 214, 230);
  opacity: 0.5;
  position: absolute;
  height: 100vh;
  width: 100vw;
}
.loading {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid rgba(9, 133, 81, 0.705);
  border-radius: 50%;
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>