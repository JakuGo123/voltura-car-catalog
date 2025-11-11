<template>
	<div class="main-content mb-5">
		<FilterBar :filters="filters" @update:filters="updateFilters" @apply-filters="applyFilters" />
		<div class="cards-grid mt-4">
			<div v-for="car in filteredCars" :key="car.id">
				<ItemCard :car="car" />
			</div>
		</div>
		<div v-if="filteredCars.length === 0" class="text-center mt-5 pt-5">
			<p class="text-muted fs-5">Nie znaleziono samochodów spełniających wybrane kryteria.</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import FilterBar from './components/filterBar.vue';
import ItemCard from './components/itemCard.vue';
import carsData from '../../../data/cars.json';
import type { Car } from '../../script/modalScript';
import { createDefaultFilters, filterCars, type FilterOptions } from '../../script/filterBar';

const cars = ref<Car[]>(carsData);
const filters = ref<FilterOptions>(createDefaultFilters());
const activeFilters = ref<FilterOptions>(createDefaultFilters());

const filteredCars = computed(() => {
	return filterCars(cars.value, activeFilters.value);
});

const updateFilters = (newFilters: FilterOptions) => {
	filters.value = { ...newFilters };
};

const applyFilters = () => {
	activeFilters.value = { ...filters.value };
};
</script>

<style scoped>
.main-content {
	width: 100%;
}

.cards-grid {
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
	justify-content: space-between;
}

.cards-grid::after {
	content: '';
	flex: auto;
}
</style>
