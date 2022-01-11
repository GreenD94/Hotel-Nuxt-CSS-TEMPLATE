<template>
  <div class="nav-item">
    <NuxtLink
      :to="urlExact"
      v-bind:class="['nav-link', isVisible ? 'active' : '']"
    >
      <i class="far fa-circle nav-icon"></i>
      <slot> </slot>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    urlExact: {
      type: String,
      default: "/",
    },
  },

  computed: {
    isVisible() {
      let url = "";

      url = this.urlExact.length > 0 ? this.urlExact : url;

      return url.length > 0 ? this.$nuxt.$route.path == url : false;
    },
  },
};
</script>
