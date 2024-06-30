import { ComicResponse } from './types';
import moment from 'moment';

const email = 'al.andukov@innopolis.university';
let params = new URLSearchParams();
params.append('email', email);

fetch(`https://fwd.innopolis.university/api/hw2?${params}`)
    .then(response => response.json())
    .then((id: number) => {
        return fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
    })
    .then(response => response.json())
    .then((data: ComicResponse) => {
        const comicImage = document.getElementById('comic-image') as HTMLImageElement;
        const comicTitle = document.getElementById('comic-title') as HTMLElement;
        const comicDate = document.getElementById('comic-date') as HTMLElement;
        const comicItems = document.getElementById('comic-items') as HTMLElement;

        comicImage.src = data.img;
        comicImage.alt = data.alt;
        comicTitle.innerText = data.safe_title;
        comicDate.innerText = moment(new Date(parseInt(data.year), parseInt(data.month) - 1, parseInt(data.day))).fromNow();
        comicItems.removeAttribute('hidden');
    })
    .catch(error => {
        console.error('Error:', error);
    });
