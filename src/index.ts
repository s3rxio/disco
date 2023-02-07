import {DiscoClient} from "@/modules";
import {IntentsBitField} from "discord.js";

const client = new DiscoClient({
    token: "OTk4NzE4MTY0MDIyMDg3NzAx.G7GLlm.4AvFyUJXPXsv5xLgrLz9_EQ8RzMBijqDOw2ceo",
    intents: [
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessages
    ]
});

client.on("ready", () => {
    console.log("Bot ready on " + client.user!.tag);
});

const ping = client.createCommand({
    name: "ping",
    description: "Replyes pong!",

    execute: (interaction) => {
        
    }
});

client.start();