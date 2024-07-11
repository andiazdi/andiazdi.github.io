import moment from 'moment';
import type {ComicResponse} from './types';


export const csr = false

export async function load() {
    let comic: ComicResponse | null = null;

    try {
        const email = 'al.andukov@innopolis.university';
        const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
        const id = await response.json();
        const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
        comic = await comicResponse.json();
        if (!comic) {
            return { comic: comic, error: null }
        }
        comic.date = moment(`${comic.year}-${comic.month}-${comic.day}`, 'YYYY-MM-DD').fromNow();

    } catch (err) {
        console.log((err as Error).name)
        return { comic: null, error: (err as Error).name }
    }
    return { comic: comic, error: null }
}
