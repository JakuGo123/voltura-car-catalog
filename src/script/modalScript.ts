import { ref } from 'vue';
import type { CarType, DriveType } from './car';

interface CarFeatures {
	acceleration: number;
	range: number;
	maxSpeed: number;
	chargingSpeed: number;
	bootCapacity: number;
	warranty: number;
}

export interface Car {
	id: number;
	model: string;
	price: number;
	type: CarType;
	versions: string[];
	colors: { value: string; name: string }[];
	additional: string[];
	features: CarFeatures;
	drive: DriveType;
	images: string[];
}

export const useModalLogic = (car: Car) => {
	const selectedCar = ref<Car>({ ...car, additional: [] });
	const images = ref<string[]>([...car.images]);

	// Funkcja zamieniająca duże zdjęcie z małym
	const swapImage = (clickedImageIndex: number) => {
		if (clickedImageIndex >= images.value.length || clickedImageIndex < 0) return;

		// Indeks 0 to duże zdjęcie, clickedImageIndex to indeks klikniętego małego zdjęcia
		const temp = images.value[0];
		const clickedImage = images.value[clickedImageIndex];

		if (temp && clickedImage) {
			// Bezpośrednia modyfikacja wartości w reaktywnej tablicy
			images.value[0] = clickedImage;
			images.value[clickedImageIndex] = temp;
		}
	};

	const formatPrice = (price: number): string => {
		return price.toLocaleString('pl-PL');
	};

	const formatVersion = (version: string): string => {
		const versionMap: { [key: string]: string } = {
			basic: 'Podstawowa',
			sport: 'Sport',
			performance: 'Performance',
		};
		return versionMap[version] || version;
	};

	const selectVersion = (version: string) => {
		selectedCar.value.versions = [version];
	};

	const selectColor = (color: { value: string; name: string }) => {
		selectedCar.value.colors = [color];
	};

	const toggleAddon = (addon: string) => {
		const index = selectedCar.value.additional.indexOf(addon);
		if (index > -1) {
			selectedCar.value.additional.splice(index, 1);
		} else {
			selectedCar.value.additional.push(addon);
		}
	};

	const isAddonSelected = (addon: string): boolean => {
		return selectedCar.value.additional.includes(addon);
	};

	const saveToLocalStorage = () => {
		const selectedOptions = {
			model: selectedCar.value.model,
			wersja: selectedCar.value.versions[0] ? formatVersion(selectedCar.value.versions[0]) : '',
			kolor: selectedCar.value.colors[0]?.name || '',
			dodatki: selectedCar.value.additional,
			cena: selectedCar.value.price,
			timestamp: new Date().toISOString(),
		};

		localStorage.setItem('selectedCarOptions', JSON.stringify(selectedOptions));
		console.log('Zapisano wybrane opcje:', selectedOptions);
	};

	return {
		selectedCar,
		images,
		swapImage,
		formatPrice,
		formatVersion,
		selectVersion,
		selectColor,
		toggleAddon,
		isAddonSelected,
		saveToLocalStorage,
	};
};
