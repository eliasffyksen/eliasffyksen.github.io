<script>
	import { navigate } from 'svelte-routing';
	import { onMount } from 'svelte';
	import Header from './Header.svelte';

	onMount(() => {
		 const urlSearchParams = new URLSearchParams(window.location.search);
		 if (urlSearchParams.has('p')) {
			 navigate(urlSearchParams.get('p'));
		 }
	});

</script>

<Header></Header>

<main class="mx-auto container">

	<div class="flex flex-wrap">
		<div class="w-full  p-5">
			<div class="bg-sky-200 h-40"></div>
		</div>

		<div class="w-1/3  p-5">
			<div class="bg-sky-200 h-40"></div>
		</div>
		<div class="w-1/3  p-5">
			<div class="bg-sky-200 h-40"></div>
		</div>
		<div class="w-1/3  p-5">
			<div class="bg-sky-200 h-40"></div>
		</div>

		<div class="w-1/4  p-5">
			<div class="bg-sky-200 h-80"></div>
		</div>
		<div class="w-1/4  p-5">
			<div class="bg-sky-200 h-80"></div>
		</div>
		<div class="w-1/4  p-5">
			<div class="bg-sky-200 h-80"></div>
		</div>
		<div class="w-1/4  p-5">
			<div class="bg-sky-200 h-80"></div>
		</div>
	</div>
</main>

<style>
</style>