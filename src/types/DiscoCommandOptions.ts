import {
	ApplicationCommandData,
	Awaitable,
	CommandInteraction
} from "discord.js";

export interface DiscoCommandOptions {
	data: ApplicationCommandData;
	execute: (interaction: CommandInteraction) => Awaitable<void>;
}
