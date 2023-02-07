import { Client, ClientOptions } from "discord.js";
import { DiscoCommand } from "@/modules/DiscoCommand";

export class DiscoClient extends Client {
	private commands: Map<string, DiscoCommand> = new Map();

	public constructor(options: ClientOptions) {
		super(options);
	}

	public async start(token: string): Promise<string> {
		await this.login(token);
		return this.user!.tag;
	}

	public async stop(): Promise<void> {
		await this.destroy();
		process.exit(0);
	}

	public async restart(token: string): Promise<string> {
		await this.stop();
		return this.start(token);
	}

	private async _init(): Promise<void> {}
}
