/// <reference path="../reference.ts" />
module example.interfaces {
    export interface User {
        id:number;
        firstname:string;
        lastname:string;
    }

    export interface Ride {
        km: number;
        date:Date;
        // TODO
        user:string;
        comment: string;
        tags: Array<String>
    }
}