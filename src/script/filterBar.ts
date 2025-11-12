import { DriveTypeList, type CarType, type DriveType, CarTypeList } from './car';
import type { Car } from './modalScript';

export interface FilterOptions {
	type: CarType | 'Wszystkie';
	drive: DriveType | 'Wszystkie';
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
		if (filters.type !== CarTypeList.ALL && car.type !== filters.type) {
			return false;
		}
		if (filters.drive !== DriveTypeList.ALL && car.drive !== filters.drive) {
			return false;
		}
		if (filters.priceMin !== null && car.price < filters.priceMin) {
			return false;
		}
		if (filters.priceMax !== null && car.price > filters.priceMax) {
			return false;
		}

		return true;
	});
};
