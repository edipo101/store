<template>
	<div>
		<form @submit.prevent="enviarFormulario">
			<div class="row">
				<div class="col-md-4">
					<div class="form-group">
						<label for="">Nombre</label>
						<input v-model="persona.nombre" type="text" class="form-control">
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label for="">Apellido</label>
						<input v-model="persona.apellido" type="text" class="form-control">
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label for="">Email</label>
						<input v-model="persona.email" type="text" class="form-control">
					</div>
				</div>
			</div>
			<div class="row py-4">
				<div class="col-md-12">
					<div class="form-group">
						<button class="btn btn-primary">Agregar</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		name: "FormularioPersona",
		data(){
			return {
				persona: {
					nombre: '',
					apellido: '',
					email: ''
				}
			}
		},
		methods: {
			enviarFormulario(){
				this.$emit('add-persona', this.persona);

				// Restablecemos el valor de la variables
				this.persona = {
					nombre: '',
					apellido: '',
					email: '',
				}
			}
		}
	}
</script>