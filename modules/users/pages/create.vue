<template >
  <Content>
    <template v-slot:contentHeader>
      <div class="col-sm-6">
        <h1 class="m-0">Usuarios</h1>
      </div>
      <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
          <li class="breadcrumb-item">Users</li>
          <li class="breadcrumb-item active">Create</li>
        </ol>
      </div>
    </template>
    <template v-slot:content>
      <div class="card-body">
        <div class="form-group">
          <label for="exampleInputEmail1">Primer Nombre</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Primer Nombre"
            v-model="input.first_name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Ultimo Nombre</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Ultimo Nombre"
            v-model="input.last_name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Correo</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Correo Electronico"
            v-model="input.email"
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Numero de Telefono</label>
          <input
            type="tel"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Numero de telefono"
            v-model="input.phone"
          />
        </div>

        <div class="card-footer d-flex justify-content-center">
          <button @click="store" type="submit" class="btn btn-primary">
            Crear
          </button>
        </div>
      </div>
    </template>
  </Content>
</template>
<script src="../controller/createController.js"></script>

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
