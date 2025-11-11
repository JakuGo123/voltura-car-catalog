<template>
	<div class="container">
		<nav class="d-flex justify-content-between align-items-center nav-container">
			<div class="logo-container d-flex align-items-center">
				<img src="/logo/Logo.svg" alt="Company Logo" height="40" class="me-2" />
				<h2 class="m-0 fs-4 fw-bold">Voltura Motors</h2>
			</div>
			<button class="btn cta-button rounded-4 fw-bold px-4 py-3">Zaplanuj jazdę testową</button>
		</nav>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
	width: 100%;
	max-width: none;
	border-bottom: 1px solid #e5e7eb;
}
.nav-container {
	height: 72px;
	width: 1200px;
	margin: 0 auto;
}
.cta-button {
	background-color: #28483b;
	border: none;
	color: white;
}
</style>
