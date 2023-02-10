import { Client } from "discord.js";
import { type DiscoClientOptions } from "../types";
import { type DiscoCommand } from "../models";

export class DiscoClient extends Client {
	private readonly _token: string;
	private readonly _commands: DiscoCommand[] = [];

	public constructor(options: DiscoClientOptions) {
		super(options);
		this._commands = options.commands ?? [];
		this._token = options.token;

		console.clear();
		this._init().finally(() => {
			console.log(`${this._commands.length} commands registered.`);
		});
	}

	public async restart(): Promise<string | undefined> {
		this.destroy();
		return await this._start();
	}

	private async _start(): Promise<string | undefined> {
		await this.login(this._token);
		return this.user?.tag;
	}

	private async _init() {
		await this._start();
		await this._registerCommands();
		this._handleInteractionCreate();
	}

	private async _registerCommands() {
		await this.application?.commands.set(
			this._commands.map(command => command.data)
		);
	}

	private _handleInteractionCreate() {
		this.on("interactionCreate", interaction => {
			this._commands.forEach(command => {
				if (
					!interaction.isCommand() ||
					interaction.commandName !== command.data.name
				)
					return;

				command.execute(interaction);
			});
		});
	}
}
