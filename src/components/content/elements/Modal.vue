<template>
	<div class="modal fade" :id="modalId" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
		<div class="modal-dialog modal-xl modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header border-bottom px-4">
					<h5 class="modal-title fw-semibold" id="modalLabel">{{ car.model }} — Szczegóły modelu</h5>
					<button type="button" class="btn-close btn-close-sm" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class="row g-4">
						<div class="col-8">
							<ImageGalerry :car="car" />
						</div>
						<!-- Prawa strona - Szczegóły -->
						<div class="col-4">
							<div class="config-section p-3 mb-2 rounded-3">
								<!-- Wersja -->
								<div class="mb-1">
									<label class="form-label small text-muted mb-2">Wersja</label>
									<div class="d-flex gap-2">
										<button
											v-for="version in car.versions"
											:key="version"
											type="button"
											class="btn flex-fill rounded-3 version-btn"
											:class="{ active: selectedCar.versions[0] === version }"
											@click="selectVersion(version)">
											{{ formatVersion(version) }}
										</button>
									</div>
								</div>
								<!-- Kolor -->
								<div class="mb-1">
									<label class="form-label small text-muted mb-2">Kolor</label>
									<div class="d-flex gap-2">
										<div
											v-for="color in car.colors"
											:key="color.value"
											class="color-option rounded-3"
											:class="{ active: selectedCar.colors[0]?.value === color.value }"
											:style="{ backgroundColor: color.value }"
											:title="color.name"
											@click="selectColor(color)"></div>
									</div>
								</div>
								<!-- Dodatki -->
								<div class="mb-1">
									<label class="form-label small text-muted mb-2">Dodatki</label>
									<div class="d-flex gap-2">
										<button
											v-for="addon in car.additional"
											:key="addon"
											type="button"
											class="btn btn-sm flex-fill addon-btn rounded-3"
											:class="{ active: isAddonSelected(addon) }"
											@click="toggleAddon(addon)">
											{{ addon }}
										</button>
									</div>
								</div>
								<!-- Cena -->
								<div class="mb-1">
									<label class="form-label small text-muted mb-1">Cena</label>
									<div class="fs-3 fw-bold text-dark">{{ formatPrice(car.price) }} zł</div>
								</div>

								<!-- Przycisk -->
								<button class="btn w-100 py-2 rounded-3 find-dealer-btn" @click="saveToLocalStorage">
									Znajdź punkt sprzedaży
								</button>
							</div>

							<!-- Kluczowe cechy -->
							<div class="fkay-features p-3 rounded-3">
								<h6 class="fw-semibold mb-3 border-bottom py-1">Kluczowe cechy</h6>
								<div class="features-grid">
									<div class="feature-item d-flex justify-content-between py-1">
										<span class="text-muted small">0-100 km/h</span>
										<span class="fw-normal feature-value">{{ car.features.acceleration }}s</span>
									</div>
									<div class="feature-item d-flex justify-content-between py-1">
										<span class="text-muted small">Maksymalna prędkość</span>
										<span class="fw-normal feature-value">{{ car.features.maxSpeed }} km/h</span>
									</div>
									<div class="feature-item d-flex justify-content-between py-1">
										<span class="text-muted small">Ładowanie</span>
										<span class="fw-normal feature-value">{{ car.features.chargingSpeed }} kW DC</span>
									</div>
									<div class="feature-item d-flex justify-content-between py-1">
										<span class="text-muted small">Pojemność bagażnika</span>
										<span class="fw-normal feature-value">{{ car.features.bootCapacity }} L</span>
									</div>
									<div class="feature-item d-flex justify-content-between py-1">
										<span class="text-muted small">Gwarancja</span>
										<span class="fw-normal feature-value">{{ car.features.warranty }} lat</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer border-top">
					<button type="button" class="btn py-2 px-4 rounded-3 cancel-btn" data-bs-dismiss="modal">Anuluj</button>
					<button type="button" class="btn py-2 px-4 rounded-3 dealer-btn ls-1" @click="saveToLocalStorage">
						Znajdź dealera
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useModalLogic, type Car } from '../../../script/modalScript';
import ImageGalerry from '../components/ImageGalerry.vue';

const props = defineProps<{
	car: Car;
	modalId: string;
}>();

const {
	selectedCar,
	formatPrice,
	formatVersion,
	selectVersion,
	selectColor,
	toggleAddon,
	isAddonSelected,
	saveToLocalStorage,
} = useModalLogic(props.car);
</script>

<style scoped>
.config-section {
	border: 1px solid #e5e7eb;
}

.fkay-features {
	border: 1px solid #e5e7eb;
}

.version-btn {
	color: #0b1e40;
	border: 1px solid #e5e7eb;
	background-color: white;
}

.version-btn:hover {
	color: #0b1e40;
	border-color: #e5e7eb;
	background-color: #f9fafb;
}

.version-btn.active {
	background-color: #123c82;
	color: white;
	font-weight: bold;
	border-color: #123c82;
}

.addon-btn {
	color: #0b1e40;
	border: 1px solid #e5e7eb;
	background-color: white;
}

.addon-btn:hover {
	color: #0b1e40;
	border-color: #e5e7eb;
	background-color: #f9fafb;
}

.addon-btn.active {
	background-color: #123c82;
	color: white;
	font-weight: bold;
	border-color: #123c82;
}

.find-dealer-btn {
	background-color: #28483b;
	color: white;
	border: none;
}

.find-dealer-btn:hover {
	background-color: #1f3a2e;
	color: white;
}

.color-option {
	width: 28px;
	height: 28px;
	border: 3px solid transparent;
	cursor: pointer;
	transition: all 0.2s ease;
}

.color-option:hover {
	transform: scale(1.1);
}

.color-option.active {
	border-color: #123c82;
	box-shadow: 0 0 0 2px white, 0 0 0 4px #123c82;
}

.features-grid {
	font-size: 14px;
}

.feature-value {
	color: #0b1e40;
}

.cancel-btn {
	color: #0b1e40;
	border: 1px solid #e5e7eb;
	background-color: white;
}

.cancel-btn:hover {
	color: #0b1e40;
	border-color: #e5e7eb;
	background-color: #f9fafb;
}

.dealer-btn {
	background-color: #123c82;
	color: white;
	font-weight: bold;
	border: none;
}

.dealer-btn:hover {
	background-color: #0f2f66;
	color: white;
}

.modal-xl {
	max-width: 1120px;
}

.btn-close-sm {
	width: 0.7em;
	height: 0.7em;
	padding: 0.25rem;
	font-size: 0.7rem;
}
</style>
