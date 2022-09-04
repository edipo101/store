<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Personas</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <!-- <formulario-persona @add-persona="agregarPersona"/> -->
        <!-- <people-table :people='personas'/> -->
        <user-table />
      </div>
    </div>
  </div>
</template>

<script>
  // import PeopleTable from '@/components/TablaPersonas.vue'
  // import FormularioPersona from '@/components/FormularioPersona.vue'
  import UserTable from '@/components/UserTable.vue'

  export default {
    name: 'App2',
    components: {
      // PeopleTable,
      // FormularioPersona,
      UserTable
    },
    data(){
      return {
        personas: [
        {
          id: 1,
          nombre: 'Gabriel',
          apellido: 'Moreno',
          email: 'gabriel@gmail.com'
        },
        {
          id: 2,
          nombre: 'José',
          apellido: 'Santibañez',
          email: 'joses@gmail.com'
        },
        ]
      }
    },
    methods: {
      agregarPersona(persona){
        let id = 0;
        if (this.personas.length > 0) {
          id = this.personas[this.personas.length - 1].id + 1;
        }
        this.personas = [...this.personas, {...persona, id}];        
      }
    }
  }
</script>

<style>
</style>
