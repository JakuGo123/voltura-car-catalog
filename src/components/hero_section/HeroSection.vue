<template>
	<div class="hero-section-container card d-flex flex-row rounded-4 p-4 gap-2 mb-5">
		<section class="content card-body d-flex flex-column p-0">
			<h1 class="card-title card-text fs-0 fw-bold">{{ translations.hero_section.title }}</h1>
			<h4
				class="card-subtitle fs-6 fw-normal font-family-Inter lh-sm paragraph lead fw-semibold"
				v-html="fixPolishText(translations.hero_section.subtitle)"></h4>
			<p class="text-muted text-start fw-normal font-family-Inter lh-sm">
				Voltura e-Line to zupełnie nowa generacja samochodów elektrycznych, łączących dynamiczne osiągi z wyjątkową
				energooszczędnością.<br />
				Zaprojektowana w oparciu o najnowsze technologie, oferuje nie tylko imponujący zasięg, ale też komfort jazdy na
				najwyższym poziomie. Nowoczesne systemy wspomagania kierowcy sprawiają, że każda podróż staje się
				bezpieczniejsza i bardziej intuicyjna.<br />
				Elegancka sylwetka i dopracowane detale nadwozia podkreślają charakter premium marki Voltura.
			</p>

			<button class="btn btn-primary rounded-3">{{ translations.hero_section.button }}</button>
		</section>
		<img src="/images/heroImage.png" alt="Voltura e-Line" class="rounded-4" />
	</div>
</template>

<script setup lang="ts">
import translations from '../../locales/pl.json';
import { fixPolishText } from '../../script/fixNBSP';

defineProps({
	translations: {
		type: Object,
		required: true,
	},
});
</script>

<style scoped>
.hero-section-container {
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 420px;
	background-color: #ffff;
	border: 1px solid #e5e7eb;
	border-radius: 24px;
	overflow: hidden;
	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		height: 100%;
		h1 {
			font-size: 44px;
			font-weight: 700;
			line-height: 52px;
			margin-bottom: 12px;
			color: #0b1e40;
		}
		h4 {
			font-size: 16px;
			font-family: 'Inter', sans-serif;
			line-height: 19px;
			margin-bottom: 14px;
			color: #1f2937;
			letter-spacing: 0.5px;
			white-space: wrap;
		}
		p {
			letter-spacing: 0.5px;
			font-size: 16px;
			max-width: 526px;
			text-wrap: unset;
		}
		.btn-primary {
			background-color: #123c82;
			height: 44px;
			width: 195px;
			margin-top: auto;
			font-size: 14px;
			font-weight: Bold;
			font-family: 'Inter', sans-serif;
		}
	}
	img {
		width: 582px !important;
		height: 364px;
	}
}
</style>
