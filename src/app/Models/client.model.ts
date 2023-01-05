import { achatService } from "./achatService.model";
import { Demande } from "./Demande.model";

export class Client {

    constructor(

        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public password?: string,
        public demande?: Demande,
        public achatService: achatService[] = []

    ) {

    }
}