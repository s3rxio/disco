import { ApplicationCommandOption, Interaction } from "discord.js";

export interface DiscoCommandOptions {
	name: string;
	description: string;

	options?: ApplicationCommandOption[];

	execute: (args?: string[], interaction?: Interaction) => Promise<void>;
}
