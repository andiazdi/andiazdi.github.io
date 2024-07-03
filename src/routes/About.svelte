<div class="about">
    <div class="text-field">
        Junior Python developer with practical experience in developing projects of varying levels of complexity.
    </div>
    <img src="selfie.jpg" alt="selfie">
    <div class="text-field" style="grid-column: 3 / 3; text-align: left;">
        <ul>
            <li><span class="stack-item-name">Programming Languages:</span> Python</li>
            <li><span class="stack-item-name">Web Technologies:</span> HTML, CSS, JS</li>
            <li><span class="stack-item-name">Frameworks and Libraries:</span> Flask, Aiogram, FastAPI, peewee, etc.
            </li>
            <li><span class="stack-item-name">Databases:</span> MySQL, Postrges, SQLite, etc.</li>
            <li><span class="stack-item-name">Version Control:</span> Git</li>
        </ul>
    </div>
</div>

<style>
    .text-field {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 10px;
        border: 1px solid #333;
        padding: 10px 20px;
        width: 100%;
        font-size: 1.2em;
        text-align: center;
        margin: 0 auto;
        grid-column: 1 / 1;
        grid-row: 1;
    }

    .about {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        grid-auto-rows: minmax(100px, auto);
        width: 60%;
        margin: 40px 40px 40px 20%;
    }

    @media (max-width: 400px) {
        .about {
            flex-direction: column;
        }

        .about img {
            width: 100%;
        }

    }

    .stack-item-name {
        font-weight: bold;
    }


    .about ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .about img {
        width: 100%;
        border-radius: 10px;
        border: 1px solid #333;
        aspect-ratio: 1;
        grid-row: 1;
        grid-column: 2 / 2;
    }

    @media screen and (max-width: 700px) {
        .about ul, .about {
            display: block;
        }

        .text-field {
            width: 100%;
            margin: 10px 0;
        }

        .about img {
            width: 100%;
            margin: 10px 0;
        }
        .about {
            width: 100%;
            box-sizing: border-box;
            margin: 0;
        }
    }
</style>