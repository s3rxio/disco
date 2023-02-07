import { DiscoCommandOptions } from "@/types/DiscoCommandOptions";
import { Interaction } from "discord.js";

export class DiscoCommand {
	private execute: DiscoCommandOptions["execute"];

	public constructor(options: DiscoCommandOptions) {
		this.execute = options.execute;

		// client.commands.set(options.name, this);
	}

	public async run(args?: string[], interaction?: Interaction): Promise<void> {
		await this.execute(args, interaction);
	}
}
