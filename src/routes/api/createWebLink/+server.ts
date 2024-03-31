import { supabase } from '$lib/supabase/supabase';

export async function POST({ request }) {
	const body = await request.formData();

	const icon_url = body.get('icon');
	const title = body.get('title');
	const website_link = body.get('link');
	const share_by = body.get('userId');

	const { error } = await supabase.from('web_links').insert([{
    icon_url,
    title,
    website_link,
    share_by
	}]);

	if (error) {
		return new Response(JSON.stringify({ success: false })); // respuesta al get
	}
	return new Response(JSON.stringify({ success: true })); // respuesta al get
}
