import { supabase } from '$lib/supabase/supabase';
// import { json } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const icon = formData.get('icon');
		const name = formData.get('name');
		const link = formData.get('link');
		const description = formData.get('description');
		const category = formData.get('category');

		const { error } = await supabase
			.from('url_links')
			.insert([{ icon, name, link, description, category }])
			.select();

		if (error) {
			console.log(error);

			return { exito: false };
		}
		return { exito: true };
	}
};
