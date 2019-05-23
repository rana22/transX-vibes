import { injectable, inject } from "inversify";
import IPersonService = require("./IPersonService");
import { Person } from "../model/Person";
import * as express from 'express';

@injectable()
class PersonService implements IPersonService {
    constructor(){
    }
    public create(item: Person): Promise<Person>{
        return new Promise<Person>((resolve, reject) => {
            Person.create(item).then(()=>{
                resolve(item);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    public retrieve(): Promise<any>{
        return new Promise<Person>((resolve, reject) => {

        });
    }

    public findById(_id: number): Promise<any>{
        return new Promise<Person>((resolve, reject) => {

        });
    }

    public findOne(options: Object): Promise<any>{
        return new Promise<Person>((resolve, reject) => {

        });
    }

    public  update(_id: number, item: Person): Promise<any>{
        return new Promise<Person>((resolve, reject) => {

        });
    }

    public delete(_id: number): Promise<any>{
        return new Promise<Person>((resolve, reject) => {

        });
    }

    public createPerson(item: Person, roles: Array<number>): Promise<any> {
        return new Promise<Person>((resolve, reject) => {

        });
    }

    public updatePerson (id: number,item: Person , roles: Array<number>) : Promise<Person>{
        return new Promise<Person>((resolve, reject) => {

        });
    }
}

export = PersonService;