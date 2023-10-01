import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { loginUserSchema } from '$lib/schemas';

export const actions = {
	login: async ({ request, locals }) => {
		// Validates with zod
		const { formData, errors } = await validateData(await request.formData(), loginUserSchema);

		// If there's any validation errors, throws them here
		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		// If there's no validation errors, authenticates with Pocketbase
		try {
			await locals.pb.collection('users').authWithPassword(formData.email, formData.password);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return {
					notVerified: true
				};
			}
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong logging in');
		}

		throw redirect(303, '/');
	}
};
