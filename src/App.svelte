<script>
	import { navigate } from 'svelte-routing';
	import { onMount } from 'svelte';

	onMount(() => {
		 const urlSearchParams = new URLSearchParams(window.location.search);
		 if (urlSearchParams.has('p')) {
			 navigate(urlSearchParams.get('p'));
		 }
	});

</script>

<main>
</main>

<style>
</style>