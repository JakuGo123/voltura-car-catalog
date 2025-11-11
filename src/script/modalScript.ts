import { ref } from 'vue';

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
	type: string;
	versions: string[];
	colors: { value: string; name: string }[];
	additional: string[];
	features: CarFeatures;
	drive: string;
	images: string[];
}

export const useModalLogic = (car: Car) => {
	// Tworzenie reaktywnej tablicy zdjęć - pierwsze zdjęcie jest główne
	const images = ref<string[]>([...car.images]);
	const selectedVersion = ref(car.versions[0]);
	const selectedColor = ref(car.colors[0]?.value || '');
	const selectedAddons = ref<string[]>([]);

	// Funkcja zamieniająca duże zdjęcie z małym
	const swapImage = (clickedImageIndex: number) => {
		if (clickedImageIndex >= images.value.length || clickedImageIndex < 0) return;

		// Indeks 0 to duże zdjęcie, clickedImageIndex to indeks klikniętego małego zdjęcia
		const tempImages = [...images.value];
		const temp = tempImages[0];
		const clickedImage = tempImages[clickedImageIndex];

		if (temp && clickedImage) {
			tempImages[0] = clickedImage;
			tempImages[clickedImageIndex] = temp;
			images.value = tempImages;
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

	const toggleAddon = (addon: string) => {
		const index = selectedAddons.value.indexOf(addon);
		if (index > -1) {
			selectedAddons.value.splice(index, 1);
		} else {
			selectedAddons.value.push(addon);
		}
	};

	const isAddonSelected = (addon: string): boolean => {
		return selectedAddons.value.includes(addon);
	};

	const saveToLocalStorage = () => {
		const selectedOptions = {
			model: car.model,
			wersja: selectedVersion.value ? formatVersion(selectedVersion.value) : '',
			kolor: car.colors.find(c => c.value === selectedColor.value)?.name || selectedColor.value,
			dodatki: selectedAddons.value,
			cena: car.price,
			timestamp: new Date().toISOString(),
		};

		localStorage.setItem('selectedCarOptions', JSON.stringify(selectedOptions));
		console.log('Zapisano wybrane opcje:', selectedOptions);
	};

	return {
		images,
		selectedVersion,
		selectedColor,
		selectedAddons,
		swapImage,
		formatPrice,
		formatVersion,
		toggleAddon,
		isAddonSelected,
		saveToLocalStorage,
	};
};
