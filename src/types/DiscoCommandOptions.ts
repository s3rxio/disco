import {
	type ApplicationCommandData,
	type Awaitable,
	type CommandInteraction
} from "discord.js";

export interface DiscoCommandOptions {
	data: ApplicationCommandData;
	execute: (interaction: CommandInteraction) => Awaitable<void>;
}
