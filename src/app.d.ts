// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
export type MouseEventHandler<T extends EventTarget> = EventHandler<MouseEvent, T>;

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	
	}
	
	namespace svelteHTML {
		interface HTMLAttributes<T extends EventTarget> {
			'on:clickOutside'?: MouseEventHandler<T> | undefined | null;
		}
	}
}

export { svelteHTML };
