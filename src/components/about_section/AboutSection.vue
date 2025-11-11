<template>
	<section class="about-section-container mb-5">
		<!-- CTA Section - Niebieski banner -->
		<div class="cta-section d-flex flex-row align-items-center justify-content-between mb-4 p-4 rounded-4">
			<h4 class="fs-4 fw-normal font-family-Inter m-0 text-white">{{ translations.call_to_action.title }}</h4>
			<button class="bg-white px-4 py-2 border-0 rounded-3 btn fs-6 fw-bold font-family-Inter cta-button">
				{{ translations.call_to_action.button }}
			</button>
		</div>

		<!-- About Voltura Section -->
		<div class="mb-5">
			<h3 class="fs-2 fw-bold mb-3">{{ translations.about_voltura.title }}</h3>
			<p class="mb-0 font-family-Inter fs-6 fw-normal lh-base about-text">{{ translations.about_voltura.content }}</p>
			<p class="font-family-Inter fs-6 fw-normal lh-base about-text">{{ translations.about_voltura.content2 }}</p>
		</div>

		<!-- FAQ Accordion -->
		<div class="accordion-container">
			<div
				v-for="(faq, index) in translations.about_voltura.accordion_faq"
				:key="index"
				class="accordion-item mb-3"
				:class="{ active: openIndex === index }">
				<div
					class="accordion-header d-flex align-items-center justify-content-between p-4 rounded-3"
					:class="{ 'accordion-open': openIndex === index }"
					role="button"
					:aria-expanded="openIndex === index"
					tabindex="0"
					@click="toggleAccordion(index)"
					@keydown.enter.prevent="toggleAccordion(index)"
					@keydown.space.prevent="toggleAccordion(index)">
					<span class="fw-semibold">{{ faq.question }}</span>
					<div class="arrow" :class="{ 'arrow-open': openIndex === index }" aria-hidden="true"></div>
				</div>
				<div v-show="openIndex === index" class="accordion-content p-4 pt-2 text-muted">
					{{ faq.answer }}
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import translations from '../../locales/pl.json';

const openIndex = ref<number | null>(null);

function toggleAccordion(index: number) {
	openIndex.value = openIndex.value === index ? null : index;
}
</script>

<style scoped>
.about-section-container {
	width: 100%;
	max-width: 1200px;
}

.cta-section {
	background-color: #123c82;
	min-height: 120px;
}

.cta-button {
	color: #123c82;
	white-space: nowrap;
}

.accordion-item {
	border: 1px solid #e9ecef;
	border-radius: 0.5rem;
	overflow: hidden;
}

.accordion-item.active {
	border: 1px solid #6b7280;
}

.accordion-header {
	cursor: pointer;
	user-select: none;
	transition: background-color 0.2s ease;
	border-radius: 0.5rem;
	background-color: #e5e7eb;
}

.accordion-header:hover {
	background-color: #d1d5db !important;
}

.accordion-item.active .accordion-header {
	background-color: #ffffff;
}

.accordion-item.active .accordion-header:hover {
	background-color: #f9fafb !important;
}

.accordion-open {
	border-bottom-left-radius: 0 !important;
	border-bottom-right-radius: 0 !important;
}

.arrow {
	width: 12px;
	height: 12px;
	border-right: 2px solid #212529;
	border-bottom: 2px solid #212529;
	transform: rotate(45deg);
	transition: transform 0.25s ease;
	flex-shrink: 0;
}

.arrow-open {
	transform: rotate(-135deg);
}

.accordion-content {
	background-color: #ffffff;
}

.about-text {
	color: #1f2937;
	width: 85%;
}
</style>
