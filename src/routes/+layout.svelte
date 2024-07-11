<script>
    import Header from './Header.svelte';
    import '../app.css';
    import Footer from "./Footer.svelte";
</script>

<head>
    <title>Profile</title>
</head>

<Header />

<main>
    <slot />
</main>

<Footer />

<svelte:head>
    <link rel="icon" href="favicon.png">
    <meta name="author" content="Almaz Andukov">
</svelte:head>
