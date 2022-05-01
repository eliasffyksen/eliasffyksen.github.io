import App from './App.svelte';
import 'font-awesome/css/font-awesome.min.css';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;