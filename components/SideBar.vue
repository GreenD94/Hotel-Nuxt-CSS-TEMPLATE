<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <NuxtLink to="/home" class="brand-link">
      <img
        src="https://thumbs.dreamstime.com/z/hotel-logo-template-58362974.jpg"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light">Hotel</span>
    </NuxtLink>
    <div class="sidebar">
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <Collapse toggleId="users" url="/user">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>Users</p>
            <template v-slot:collapseable>
              <CollapseItem urlExact="/user"><p>Lista</p></CollapseItem>
              <CollapseItem urlExact="/user/create"><p>Create</p></CollapseItem>
            </template>
          </Collapse>
        </ul>
      </nav>
    </div>
  </aside>
</template>
<script>
export default {
  computed: {},
  methods: {},
};
</script>