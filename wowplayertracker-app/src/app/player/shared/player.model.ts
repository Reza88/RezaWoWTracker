export class Player{
    name:string; 
    server:string; 
    role:string; 
    rank:string;

    constructor(name:string,server:string, role:string,rank:string){
        this.name = name; 
        this.server=server; 
        this.role = role; 
        this.rank = rank;
    }
}