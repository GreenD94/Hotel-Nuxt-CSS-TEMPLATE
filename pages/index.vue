<template>
  <Content>
    <template v-slot:contentHeader>
      <div class="col-sm-6">
        <h1 class="m-0">Dashboard</h1>
      </div>
      <!-- /.col -->
      <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active">Dashboard v1</li>
        </ol>
      </div>
    </template>
    <template v-slot:content> hola2 </template>
  </Content>
</template>

<script>
export default {};
</script>
