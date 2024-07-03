<script lang="ts">
    import { onMount } from 'svelte';
    import moment from 'moment';

    interface ComicResponse {
        month: string;
        num: number;
        link: string;
        year: string;
        news: string;
        safe_title: string;
        transcript: string;
        alt: string;
        img: string;
        title: string;
        day: string;
    }

    let comic: ComicResponse | null = null;
    let error: string | null = null;

    async function fetchComic() {
        try {
            const email = 'al.andukov@innopolis.university';
            const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
            const id = await response.json();
            const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
            comic = await comicResponse.json();
        } catch (err) {
            error = (err as Error).message;
        }
    }

    onMount(fetchComic);
</script>

<div class="comic-component">
    {#if error}
        <div class="error">{error}</div>
    {:else}
        {#if comic}
            <img id="comic-image" src={comic.img} alt={comic.alt}>
            <hr />
            <div id="comic-items">
                <h2 id="comic-title">{comic.safe_title}</h2>
                <p id="comic-date">{moment(new Date(parseInt(comic.year), parseInt(comic.month) - 1, parseInt(comic.day))).fromNow()}</p>
            </div>
        {:else}
            <img id="comic-image" src="loading.gif" alt="Loading...">
        {/if}
    {/if}
</div>


<style>
    .comic-component {
        border: 1px solid #ccc;
        padding: 20px;
        display: inline-block;
        box-sizing: border-box;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        color: #121212;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: fit-content;
        height: fit-content;
    }

    .comic-component img {
        max-width: 100%;
        height: auto;
    }

    .comic-component h2 {
        margin: 10px 0 0 0;
        text-align: center;
    }

    .comic-component p {
        margin: 0;
        text-align: center;
    }
</style>