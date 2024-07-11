import { describe, expect, it } from 'vitest';
import type { ComicResponse } from "./types";

async function fetchId(email: string): Promise<string> {
    const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
    return response.text();
}

describe('API test', () => {
    it('should fetch the correct id for the given email', async () => {
        const email = 'al.andukov@innopolis.university';
        const realId = "443";
        const id = await fetchId(email);
        expect(id).toBe(realId);
    });

    it('should return error message for an invalid email', async () => {
        const notEmail = "1";
        const errorMessage = "Email is not a valid Innopolis email";
        expect(await fetchId(notEmail)).toBe(errorMessage);
    });

    it('should fetch the correct comic data for the given id', async () => {
        const realComic = {
            "month": "6",
            "num": 443,
            "link": "",
            "year": "2008",
            "news": "",
            "safe_title": "Know Your Vines",
            "transcript": "Virginia Creeper: Vines useful as impromptu rope\nPoison Ivy: Grows in same habitat as Virginia Creeper\nGirlfriend: Into light bondage\nArea around campsite: Too dark to see\nRelationship after camping trip: Strained\n{{title text: Friggin' modern tents don't have a single piece of rope.}}",
            "alt": "Friggin' modern tents don't have a single piece of rope.",
            "img": "https://imgs.xkcd.com/comics/know_your_vines.png",
            "title": "Know Your Vines\u003Cimg src=\"\" onerror=\"alert('You\\'ve been hacked! Should have used safe_title instead of title and textContent instead of innerHTML ¯\\\\_(ツ)_/¯');this.parentNode.removeChild(this);\"\u003E",
            "day": "30"
        };
        const id = await fetchId('al.andukov@innopolis.university');
        const comic: ComicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`).then(res => res.json());
        expect(comic).toEqual(realComic);
    });
});
