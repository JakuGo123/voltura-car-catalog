<template>
	<div>
		<div class="item-card rounded-4 overflow-hidden bg-white shadow-sm">
			<div class="image-container bg-light">
				<img :src="car.previewImage" :alt="car.model" class="w-100 h-100 object-fit-cover" />
			</div>
			<div class="info-container px-3 pb-3 pt-1 d-flex flex-column justify-content-between">
				<h3 class="car-model fw-semibold mb-0">{{ car.model }}</h3>
				<div class="car-details d-flex flex-column gap-2 fs-4">
					<div class="detail-item d-flex align-items-center">
						<span class="price fw-bold fs-5">od {{ formatPrice(car.price) }} zł</span>
					</div>
					<div class="detail-row d-flex justify-content-between align-items-center">
						<div class="d-flex gap-2">
							<span class="drive fw-medium">{{ car.drive }}</span>
							<span>•</span>
							<span class="range fw-medium">{{ car.features.range }}km range</span>
						</div>
						<button
							class="btn btn-sm btn-primary px-3 py-0 rounded-4"
							data-bs-toggle="modal"
							:data-bs-target="`#carModal${car.id}`">
							Sprawdź
						</button>
					</div>
				</div>
			</div>
		</div>
		<Modal :car="car" :modal-id="`carModal${car.id}`" />
	</div>
</template>

<script setup lang="ts">
import Modal from '../elements/Modal.vue';
import type { Car } from '../../../script/modalScript';

defineProps<{
	car: Car;
}>();

const formatPrice = (price: number): string => {
	return price.toLocaleString('pl-PL');
};
</script>

<style scoped>
.item-card {
	width: 100%;
	max-width: 368px;
	height: 300px;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.item-card:hover {
	transform: translateY(-4px);
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15) !important;
}

.image-container {
	width: 100%;
	height: 200px;
}

.info-container {
	width: 100%;
	height: 100px;
}

.car-model {
	font-size: 18px;
	color: #1f2937;
}

.price {
	font-size: 16px;
	color: #2c3e50;
}

.detail-row {
	font-size: 14px;
	color: #6b7280;
}

.btn-primary {
	background-color: #123c82;
	border-color: #123c82;
}

.btn-primary:hover {
	background-color: #0d2d63;
	border-color: #0d2d63;
}
</style>
