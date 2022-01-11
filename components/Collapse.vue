<template>
  <div
    v-bind:class="[
      'nav-item',
      isIconSelected || isVisible ? 'menu-is-opening' : '',
      isIconSelected || isVisible ? 'menu-open' : '',
    ]"
    @click="isIconSelected = !isIconSelected"
  >
    <div v-bind:class="['nav-link', isVisible ? 'active' : '']">
      <slot></slot>
      <i v-if="!isCollapseableEmpty" class="right fas fa-angle-left"></i>
    </div>
    <div class="nav nav-treeview">
      <slot name="collapseable"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "",
    },
  },
  data() {
    return { isIconSelected: false };
  },
  computed: {
    isVisible() {
      let url = "";
      url = this.url.length > 0 ? this.url : url;

      return url.length > 0 ? this.$nuxt.$route.path.includes(url) : false;
    },
    isCollapseableEmpty() {
      return !this.$slots["collapseable"];
    },
  },
};
</script>
