import { ClientOptions } from "discord.js";
import { DiscoCommand } from "../models";

export interface DiscoClientOptions extends ClientOptions {
	token: string;
	commands?: DiscoCommand[];
}
