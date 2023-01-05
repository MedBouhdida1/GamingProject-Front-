import { Demande } from "./Demande.model";

export class Coach {

    constructor(

        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public password?: string,
        public demandes?: Demande[]

    ) {

    }
}