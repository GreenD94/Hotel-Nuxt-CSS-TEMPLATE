<template >
  <Content>
    <template v-slot:contentHeader>
      <div class="col-sm-6">
        <h1 class="m-0">Usuarios</h1>
      </div>
      <!-- /.col -->
      <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
          <li class="breadcrumb-item">Users</li>
          <li class="breadcrumb-item active">Lista</li>
        </ol>
      </div>
    </template>
    <template v-slot:content>
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Lista de Usuarios</h3>
        </div>
        <div class="card-body">
          <table id="example1" class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Primer nombre</th>
                <th>Ultimo Nombre</th>
                <th>Telefono</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <th>{{ user.first_name }}</th>
                <th>{{ user.last_name }}</th>
                <th>{{ user.phone }}</th>
                <button
                  v-if="$authCan('delete')"
                  @click="deleteUser(user.id)"
                  type="button"
                  class="btn btn-tool"
                >
                  <i class="fas fa-times"></i>
                </button>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </Content>
</template>
<script src="../controller/indexController.js"></script>

<style scoped>
.cell {
  border: 1px solid black;
  background-color: #dcdcdc;
}

.tableheader {
  border: 1px solid black;
  background-color: #f4f5ff;
}
</style>
