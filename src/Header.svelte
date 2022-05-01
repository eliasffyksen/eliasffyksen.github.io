<script>
    import { navigate } from 'svelte-routing';

    function clickHome() {
        navigate('/');
    }
</script>
<header class="p-5 flex container mx-auto">
    <span
        on:click="{clickHome}"
        class="text-4xl px-2 border border-black border-4 cursor-pointer">FYXN</span>
</header>