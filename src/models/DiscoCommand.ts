import { CommandInteraction } from "discord.js";
import { DiscoCommandOptions } from "../types";

export class DiscoCommand implements DiscoCommandOptions {
	private readonly _execute: DiscoCommandOptions["execute"];
	public readonly data: DiscoCommandOptions["data"];

	public constructor({ data, execute }: DiscoCommandOptions) {
		this.data = data;
		this._execute = execute;
	}

	public execute(interaction?: CommandInteraction): void {
		if (interaction instanceof CommandInteraction) {
			this._execute(interaction);
		}
	}
}
