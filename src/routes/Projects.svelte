<script lang="ts">
	type Project = {
		title: string;
		description: string;
		url: string;
	};

	const projects: Project[] = [
		{
			title: 'GameClub',
			description:
				'Telegram bot for the Innopolis game club with booking, admin panel for setting all parameters. Self-made project.',
			url: 'https://github.com/andiazdi/gamebot'
		},
		{
			title: 'SmartHomeSystem',
			description:
				'System of smart home has server-side and client-side parts. Server is MQTT server for getting new messages from devices and sending them to db. Devices is an arduino with some sensors (Temperature, lightcontrole, etc.). They send their readings to the server. Client is a Telegram bot, which send information about devices and their readings to user. Self-made project.',
			url: 'https://github.com/andiazdi/SmartHomeSystem'
		},
		{
			title: 'ShopBot',
			description:
				'Telegram bot for sellers to make sales in a Telegram interface. Consists of the Admin panel and the bot itself. AdminPanel allows to manage products. Self-made project',
			url: 'https://github.com/andiazdi/ShopBot'
		},
		{
			title: 'MusaDzhalilTheatreBot',
			description:
				'Telegram bot for MusaDzhalilTheatre made on the hackathon. Contains payments, parsing MusaDzhalilTheatre site to get new information (ex. news, tickets, etc.). Self-made project.',
			url: 'https://github.com/andiazdi/MusaDzhalilTheatreBot'
		},
		{
			title: 'DarkProject',
			description:
				'Telegrm Bot for InnoCTF competition with pre-designed SQLinjection vulnerability. Self-made project.',
			url: 'https://github.com/andiazdi/DarkProject'
		}
	];
</script>

<div class="projects">
	<ul>
		{#each projects as project}
			<li class="project-item">
				<a href={project.url} target="_blank">
					<div class="project-title">{project.title}</div>
					<div class="project-description">{project.description}</div>
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.projects {
		margin: 60px 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: stretch;
	}

	.projects a {
		text-decoration: none;
		color: black;
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 0;
	}

	.project-item {
		width: 30%;
		padding: 15px 30px;
		box-sizing: border-box;
		min-height: 200px;
		display: block;
		background-color: hsl(var(--card));
		margin: 7px;
		border-radius: 10px;
		flex-grow: 1;
		border: 1px solid #333;
		position: relative;
		transition: background-color 0.2s ease;
	}

	.projects ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.projects ul li {
		list-style: none;
	}

	.project-item:hover {
		background: #111;
	}

	.project-title {
		font-size: 1.5em;
		padding: 10px;
		font-weight: bold;
		color: #e2e2e2;
	}

	.project-description {
		font-size: 1.2em;
		color: #999;
		padding: 10px;
	}

	@media screen and (max-width: 700px) {
		.project-item {
			width: 100%;
			padding: 10px 15px;
		}

		.projects {
			margin-top: 10px;
		}
	}
</style>
