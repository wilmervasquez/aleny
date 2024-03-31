import type { CardTarget } from '$lib/interface';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }): Promise<{ webLinks: CardTarget[] }> => {
	const response = await fetch('/api/getLinksWebs?idLink=');
	const data = await response.json();
	return { webLinks: data };
};
