import { Client } from "./client.model";
import { Coach } from "./Coach.model";

export class Demande {

    constructor(

        public id?: number,
        public game?: string,
        public discordId?: string,
        public team?: string,
        public idInGame?: string,
        public rankInGame?: string,
        public location?: string,
        public etat?: number,
        public coachId?: number,
        public coach?: Coach,
        public clientId?: number,
        public client?: Client




    ) {

    }
}