import { type ClientOptions } from "discord.js";
import { type DiscoCommand } from "../models";

export interface DiscoClientOptions extends ClientOptions {
	token: string;
	commands?: DiscoCommand[];
}
