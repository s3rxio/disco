import {ClientOptions} from "discord.js";

export interface DiscoClientOptions extends ClientOptions {
    token: string;
}