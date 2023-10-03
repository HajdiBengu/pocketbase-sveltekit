import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from './lib/utils';

// Hooks are run on every request on our Sveltekit app.

export const handle = async ({ event, resolve }) => {
	// This hook initiates a new Pocketbase instance.
	event.locals.pb = new PocketBase('https://pocketbase-sveltekit.pockethost.io');

	// Grabs the cookie from the browser, if we have one/ Checks it and loads it in our Pocketbase's authStore so we can use it.
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	// If it is valid, refreshes it, so that a malicious actor cannot hack it via the browser,
	// then serializes the model and sets it to our user.
	try {
		if (event.locals.pb.authStore.isValid) {
			await event.locals.pb.collection('users').authRefresh();
			event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
		}
		//If it's not valid, clears the cookie (which logs the user out) and sets the user to undefined.
	} catch (_) {
		event.locals.pb.authStore.clear();
		event.locals.user = undefined;
	}

	// Everything that happens server-side, takes place under the await resovlve event.
	const response = await resolve(event);

	// Exports the latest authStore to the cookie in the browser,
	// so when a request is done, we have the latest instance of the authStore.
	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response;
};
