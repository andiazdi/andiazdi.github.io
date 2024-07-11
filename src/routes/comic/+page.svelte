<script lang="ts">
    import type { ComicResponse } from './types';
    import Comic from "./Comic.svelte";

    export let data: {comic: ComicResponse | null, error: string | null}

</script>

<Comic comic={data.comic} error={data.error}/>