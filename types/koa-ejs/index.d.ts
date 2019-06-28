declare module 'koa-ejs' {
	import * as Koa from 'koa'

	interface Options {
		root: string,
		layout?: string | boolean,
		// default viewExt is 'html'
		viewExt?: string,
		// default cache is true
		cache?: boolean,
		// default debug is false
		debug?: boolean,
		// default delimiter is '%'
		delimiter?: string
	}

	function ejs(app: Koa, options: Options): void;

	export = ejs;

	namespace ejs {
		type render = (templateName: string, options?: any) => Promise<any>;

		type Context = Koa.Context & { render: render }

		interface ContextWithRender {
			render: render;
		}
	}
}