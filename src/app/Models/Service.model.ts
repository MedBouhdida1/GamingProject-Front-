import { achatService } from "./achatService.model";
import { Coach } from "./Coach.model";

export class Service {

    constructor(

        public id?: number,
        public price?: string,
        public dateCeation?: string,
        public title?: string,
        public Description?: string,
        public game?: string,
        public coachId?: number,
        public coach?: Coach,
        public clientId?: number,
        public AchatServices: achatService[] = []




    ) {

    }
}