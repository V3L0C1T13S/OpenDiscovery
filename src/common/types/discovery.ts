/* eslint-disable no-tabs */
export interface Metadata {
	type: string;
	width: number;
	height: number;
}

export interface Icon {
	_id: string;
	tag: string;
	filename: string;
	metadata: Metadata;
	content_type: string;
	size: number;
}

export interface Banner {
	_id: string;
	tag: string;
	filename: string;
	metadata: Metadata;
	content_type: string;
	size: number;
}

export interface Server {
	_id: string;
	name: string;
	icon: Icon;
	banner: Banner;
	description: string;
	flags: number;
	tags: string[];
	members: number;
	activity: string;
}

export interface PageProp<T> {
	servers?: T[];
  bots?: T[];
  themes?: T[],
	popularTags: string[];
}

export interface DiscoveryResponse<T> {
	pageProps: PageProp<T>;
	__N_SSG: boolean;
}
