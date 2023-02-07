import {ApplicationCommand, Interaction} from "discord.js";

export interface DiscoCommandOptions extends ApplicationCommand {
	execute: (interaction?: Interaction) =>  void;
}
