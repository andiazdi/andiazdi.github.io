<script lang="ts">
    import type {ComicResponse} from './types';

    export let comic: ComicResponse | null = null;
    export let error: string | null = null;
</script>

{#if error}
    <p>Error: {error}</p>
{:else if comic}
    <div class="comic-component">
        {#if error}
            <div class="error">{error}</div>
        {:else}
            {#if comic}
                <img id="comic-image" src={comic.img} alt={comic.alt}>
                <hr/>
                <div id="comic-items">
                    <h2 id="comic-title">{comic.safe_title}</h2>
                    <p id="comic-date">{comic.date}</p>
                </div>
            {:else}
                <img id="comic-image" src="loading.gif" alt="Loading...">
            {/if}
        {/if}
    </div>
{:else}
    <p>Loading...</p>
{/if}

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
