<template>
	<div class="container full-width py-4">
		<div class="row">
			<h3>Lista de usuarios</h3>
			<table class="table table-striped">
				<thead>
					<tr>
						<th scope="col">Id</th>
						<th scope="col">Nombre y apellidos</th>
						<th scope="col">Email</th>
						<th scope="col">Dirección</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="user in users" :key="user.id">
						<td>{{user.id}}</td>
						<td>{{user.name}}</td>
						<td>{{user.email}}</td>
						<td>{{user.created_at}}</td>
						<!-- <td>{{user.address.street}}</td> -->
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	
	export default {
		data() {
			return {
				users: []
			}
		},
		mounted() {
			this.getUsers()
		},
		methods: {
			getUsers() {
				// axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
				// axios.get('http://127.0.0.1:8000/api/users').then(response => {
				axios.get('./users.js').then(response => {
					this.users = response.data;
                    // $('#sampleTable').DataTable().destroy();
                    // this.showTable();
                })
			}
		}
	}
</script>