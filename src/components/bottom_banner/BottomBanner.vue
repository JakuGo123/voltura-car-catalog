<template>
	<div class="container-fluid py-3 componentImage rounded-4 relative d-flex align-items-center justify-content-center">
		<p class="font-family-Inter fs-2 fw-bold">{{ translations.bottom_banner.title }}</p>
	</div>
</template>

<script setup lang="ts">
import translations from '../../locales/pl.json';
</script>

<style scoped>
.componentImage {
	position: relative;
	background-color: rgb(18, 60, 130);
	height: 295px;
	width: 100%;
}

.componentImage::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-image: url('/images/bottomBannerImage.png');
	background-size: cover;
	background-position: 50% 70%;
	opacity: 0.2;
	border-radius: inherit;
	z-index: 0;
}

.componentImage > * {
	position: relative;
	z-index: 1;
}

p {
	color: white;
}
</style>
