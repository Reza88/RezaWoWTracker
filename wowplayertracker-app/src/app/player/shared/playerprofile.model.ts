export class PlayerProfile{
    lastModified:string; 
    name: string;
    realm: string;
    battlegroup: string;
    class: number;
    race: number;
    gender: number;
    level: number;
    achievementPoints: number;
    thumbnail: string;
    calcClass: string;
    faction: number;
    totalHonorableKills: number
    role:string; 

    constructor(obj?:any){
        this.lastModified = obj.lastModified; 
        this.name = obj.name; 
        this.realm = obj.realm; 
        this.battlegroup = obj.battlegroup; 
        this.class = obj.class; 
        this.race = obj.race; 
        this.gender = obj.gender; 
        this.level = obj.level; 
        this.achievementPoints = obj.achievementPoints; 
        this.thumbnail = obj.thumbnail; 
        this.calcClass = obj.calcClass; 
        this.faction = obj.faction; 
        this.totalHonorableKills = obj.totalHonorableKills
        this.role = obj.role; 
    }
    
}


