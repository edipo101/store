<template>
	<div>
		<table class="table">
			<thead>
				<tr>
					<th>#</th>
					<th>Nombre</th>
					<th>Apellido</th>
					<th>email</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for='person in people' :key="person.id">
					<td>{{person.id}}</td>
					<td>{{person.nombre}}</td>
					<td>{{person.apellido}}</td>
					<td>{{person.email}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'people-table',
		props: {
			people: Array
		}
	}
</script>

<style>
	
</style>