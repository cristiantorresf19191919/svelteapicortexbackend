export interface Picture {
	_id: string;
	name: string;
	url: string;
	size: number;
	height: number;
	ext: string;
	createdAt: string;
	updatedAt: string;
}
export interface ServiceModel {
	title: string;
	description: string;
	createdAt: string;
	updatedAt: string;
	id: string;
	pictures: Picture;
    price:number;
}
