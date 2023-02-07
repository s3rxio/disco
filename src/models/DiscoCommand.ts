import {DiscoCommandOptions} from "@/types/DiscoCommandOptions";
import {Interaction} from "discord.js";

export class DiscoCommand {
    private readonly _execute: DiscoCommandOptions["execute"];

    public constructor(public options: DiscoCommandOptions) {
        this._execute = options.execute;
    }

    public async execute(interaction?: Interaction): Promise<void> {
        await this._execute(interaction);
    }
}