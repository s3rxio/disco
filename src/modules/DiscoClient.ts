import { Client } from "discord.js";
import {DiscoCommand} from "@/models/DiscoCommand";
import {DiscoClientOptions, DiscoCommandOptions} from "@/types";

export class DiscoClient extends Client {
	private commands: Map<string, DiscoCommand> = new Map();
	private _token: string;

	public constructor(options: DiscoClientOptions) {
		super(options);
		this._token = options.token;
		
		this._init();
	}

	public async start(): Promise<string> {
		await this.login(this._token);
		return this.user!.tag;
	}

	public async stop(): Promise<void> {
		await this.destroy();
		process.exit(0);
	}

	public async restart(): Promise<string> {
		if (!this.token) throw new Error("Token does not exist");
		await this.stop();
		return this.start();
	}

	public createCommand(options: DiscoCommandOptions): DiscoCommand {
		const command = new DiscoCommand(options);
		this.commands.set(command.options.name, command);

		return command;
	}

	private _init() {
		this._handleCommand();
	}

	private _handleCommand() {
		this.on("interactionCreate", (interaction) => {
			this.commands.forEach((command) => {
				if (!interaction.isCommand()) return;
				console.log(command.options);
				console.log(interaction);
			})
		})
	}

}
