<template>
	<div class="gallery-grid gap-4">
		<div class="main-image-container rounded-4 overflow-hidden d-flex align-items-center justify-content-center">
			<img :src="images[0]" :alt="car.model" class="w-100 h-100" />
		</div>
		<div
			v-for="index in [1, 2, 3]"
			:key="`thumb-${index}`"
			class="thumbnail-container rounded-4 overflow-hidden d-flex align-items-center justify-content-center"
			@click="swapImage(index)">
			<img :src="images[index]" :alt="`${car.model} ${index + 1}`" class="w-100 h-100" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Car } from '../../../script/modalScript';

const props = defineProps<{
	car: Car;
}>();

const images = ref<string[]>([...props.car.images]);

const swapImage = (clickedImageIndex: number) => {
	if (clickedImageIndex >= images.value.length || clickedImageIndex < 0) return;

	const temp = images.value[0];
	const clickedImage = images.value[clickedImageIndex];

	if (temp && clickedImage) {
		images.value[0] = clickedImage;
		images.value[clickedImageIndex] = temp;
	}
};
</script>

<style scoped>
.gallery-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
}

.main-image-container {
	grid-column: 1 / -1;
	height: 400px;
	background: #f5f5f5;
	cursor: pointer;
}

.main-image-container img {
	object-fit: cover;
	display: block;
}

.thumbnail-container {
	height: 120px;
	background: #f5f5f5;
	cursor: pointer;
	border: 2px solid transparent;
	transition: border-color 0.2s ease;
}

.thumbnail-container img {
	object-fit: cover;
	display: block;
}
</style>
