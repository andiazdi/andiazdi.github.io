<header>
    <h1>Andukov Almaz</h1>
    <nav class="menu">
        <ul>
            <li>
                <a href="/">About me</a>
            </li>
            <li><a href="/comic">Comic</a></li>
        </ul>
    </nav>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        background-color: #181820;
        color: #fff;
    }

    header nav {
        display: flex;
        gap: 20px;
        margin-right: 15px;
    }

    header h1 {
        margin: 0 auto;
        padding-left: 200px;
    }

    header nav ul {
        display: flex;
        list-style-type: none;
        flex-direction: row;
        padding: 0;
        margin: 0;
    }

    header nav li {
        margin: 10px;
    }

    header nav a {
        background-color: #009B77;
        color: #e2e2e2;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 10px;
        transition: background-color 0.3s ease;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        margin: 0;
    }

    header nav a:hover {
        background-color: hsl(166 100% 20% / 1);
    }

    @media screen and (max-width: 700px) {
        header {
            justify-content: space-evenly;
        }

        header h1 {
            padding: 5px;
            font-size: 20px;
            display: inline-block;
        }

        header nav li {
            margin: 10px 0 10px 10px;
        }
        header nav li:nth-child(1) {
            margin-left: 0;
        }
    }
</style>