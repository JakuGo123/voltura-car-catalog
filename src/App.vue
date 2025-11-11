<script setup lang="ts">
import NavigationContainer from './components/navigation/NavigationContainer.vue';
import HeroSection from './components/hero_section/HeroSection.vue';
import BottomBanner from './components/bottom_banner/BottomBanner.vue';
import AboutSection from './components/about_section/AboutSection.vue';
import MainContent from './components/content/MainContent.vue';
import Footer from './components/footer/footer.vue';
</script>

<template>
	<NavigationContainer />
	<main>
		<HeroSection />
		<MainContent />
		<AboutSection />
		<BottomBanner />
	</main>
	<Footer />
</template>

<style scoped>
main {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1200px;
	margin: 0 auto;
}
</style>
