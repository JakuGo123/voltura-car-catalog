<template>
	<div class="filter-bar d-flex align-items-center rounded-4">
		<div class="container-fluid">
			<div class="row align-items-center g-3">
				<!-- Typ -->
				<div class="col-auto d-flex align-items-center gap-2">
					<label for="typeSelect" class="form-label mb-0 small">Typ</label>
					<select id="typeSelect" class="form-select form-select-sm" v-model="localFilters.type" @change="emitFilters">
						<option v-for="(value, key) in CarTypeList" :key="key" :value="value">
							{{ value }}
						</option>
					</select>
				</div>

				<!-- Napęd -->
				<div class="col-auto d-flex align-items-center gap-2">
					<label for="driveSelect" class="form-label mb-0 small">Napęd</label>
					<select
						id="driveSelect"
						class="form-select form-select-sm"
						v-model="localFilters.drive"
						@change="emitFilters">
						<option v-for="(value, key) in DriveTypeList" :key="key" :value="value">
							{{ value }}
						</option>
					</select>
				</div>

				<!-- Cena -->
				<div class="col-auto d-flex align-items-center gap-2">
					<label class="form-label mb-0 small">Cena</label>
					<div class="d-flex gap-2 align-items-center">
						<input
							type="number"
							class="form-control form-control-sm price-input"
							placeholder="Min"
							min="0"
							v-model.number="localFilters.priceMin"
							@input="emitFilters" />
						<span class="text-muted">-</span>
						<input
							type="number"
							class="form-control form-control-sm price-input"
							placeholder="Max"
							min="0"
							v-model.number="localFilters.priceMax"
							@input="emitFilters" />
					</div>
				</div>

				<!-- Przycisk Filtruj -->
				<div class="col-auto ms-auto">
					<button class="btn btn-primary filter-button rounded-3 px-5 py-2" @click="applyFilters">Filtruj</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { FilterOptions } from '../../../script/filterBar';
import { CarTypeList, DriveTypeList } from '../../../script/car';

const props = defineProps<{
	filters: FilterOptions;
}>();

const emit = defineEmits<{
	'update:filters': [filters: FilterOptions];
	'apply-filters': [];
}>();

const localFilters = ref<FilterOptions>({ ...props.filters });

watch(
	() => props.filters,
	newFilters => {
		localFilters.value = { ...newFilters };
	},
	{ deep: true }
);

const emitFilters = () => {
	emit('update:filters', { ...localFilters.value });
};

const applyFilters = () => {
	emit('apply-filters');
};
</script>

<style scoped>
.filter-bar {
	width: 100%;
	height: 72px;
	background-color: #ffffff;
	border: 1px solid #e5e7eb;
}

.price-input {
	width: 100px;
}

.filter-button {
	padding: 0 20px;
	background-color: #28483b;
	border-color: #28483b;
}

.form-label {
	font-weight: 500;
	color: #495057;
	white-space: nowrap;
}
</style>
