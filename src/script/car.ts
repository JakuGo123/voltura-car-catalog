export interface CarFeatures {
	acceleration: number;
	range: number;
	maxSpeed: number;
	chargingSpeed: number;
	bootCapacity: number;
	warranty: number;
}
export const CarVersions = {
	BASIC: 'Podstawowa',
	SPORT: 'Sport',
	PERFORMANCE: 'Performance',
};
export type CarVersion = (typeof CarVersions)[keyof typeof CarVersions];

export const CarAddons = {
	WINTER_TYRES: 'Opony zimowe',
	ACCESSORIES: 'Akcesoria',
};
export type CarAddon = (typeof CarAddons)[keyof typeof CarAddons];

export const CarTypeList = {
	ALL: 'Wszystkie',
	SUV: 'SUV',
	Sedan: 'Sedan',
	Hatchback: 'Hatchback',
	Coupe: 'Coupe',
} as const;
export type CarType = (typeof CarTypeList)[keyof typeof CarTypeList];

export const DriveTypeList = {
	ALL: 'Wszystkie',
	FWD: 'FWD',
	RWD: 'RWD',
	AWD: 'AWD',
} as const;
export type DriveType = (typeof DriveTypeList)[keyof typeof DriveTypeList];

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
