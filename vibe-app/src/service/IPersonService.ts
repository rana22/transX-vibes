
import { Person } from "../model/Person";
import IBaseService = require("./base/IBaseService");

interface IPersonService extends IBaseService<Person> {
    updatePerson(_id: number, item: Person, roles: Array<number>) : Promise<any>;
    createPerson(item: Person, roles: Array<number>) : Promise<Person>;
}

export = IPersonService;