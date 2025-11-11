import type { Car } from './modalScript';

export interface FilterOptions {
	type: string;
	drive: string;
	priceMin: number | null;
	priceMax: number | null;
}

export const createDefaultFilters = (): FilterOptions => ({
	type: 'Wszystkie',
	drive: 'Wszystkie',
	priceMin: null,
	priceMax: null,
});

export const filterCars = (cars: Car[], filters: FilterOptions): Car[] => {
	return cars.filter(car => {
		// Filtrowanie po typie
		if (filters.type !== 'Wszystkie' && car.type.toLowerCase() !== filters.type.toLowerCase()) {
			return false;
		}

		// Filtrowanie po napędzie
		if (filters.drive !== 'Wszystkie' && car.drive.toLowerCase() !== filters.drive.toLowerCase()) {
			return false;
		}

		// Filtrowanie po cenie minimalnej
		if (filters.priceMin !== null && car.price < filters.priceMin) {
			return false;
		}

		// Filtrowanie po cenie maksymalnej
		if (filters.priceMax !== null && car.price > filters.priceMax) {
			return false;
		}

		return true;
	});
};
