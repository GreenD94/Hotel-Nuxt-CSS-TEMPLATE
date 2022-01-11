<template>
  <div class="content-wrapper">
    <div class="content-header container-fluid row mb-2">
      <slot name="contentHeader"></slot>
    </div>
    <section class="content">
      <div class="container-fluid">
        <slot name="content"></slot>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>