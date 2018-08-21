import {Injectable} from '@angular/core'; 
import { Http,Response} from '@angular/http';

import {Observable} from 'rxjs'; 
import {Player} from './player.model';
import { PlayerProfile } from './playerprofile.model';
import { map, flatMap } from 'rxjs/operators';
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class PlayerService{
    player:Player[] = []; 
    constructor(private http:Http){
        
    }

     public getAllPlayerProfiles():Observable<Player[]>{
        return this.http
        .get('http://localhost:3001/api/v1/players')
        .pipe(map(res=>{
            return res.json().map(item=>{
                return new Player(
                    item.name, 
                    item.server
                )
            });
        }));
    } 

    getAllPlayerProfilesStats():Observable<any>{
        return  this.http.get('http://localhost:3001/api/v1/players')
        .flatMap((res:Response)=> res.json())
        .flatMap((player:Player)=>
             this.http.get(`https://us.api.battle.net/wow/character/
            ${player.server}/
            ${player.name}?locale=en_US&apikey=kd9qpxf7u2dabsjwhrnkdskmr57ec3y2`))
            .pipe(map(res=>{
                return new PlayerProfile({
                    lastModified:res.json().lastModified,
                    name:res.json().name, 
                    realm:res.json().realm, 
                    battlegroup:res.json().battlegroup, 
                    class:res.json().class, 
                    race:res.json().race, 
                    gender:res.json().gender, 
                    level:res.json().level, 
                    achievements:res.json().achievementPoints, 
                    thumbnail:res.json().thumbnail, 
                    calcClass:res.json().calcClass,
                    faction:res.json().faction, 
                    totalHonorableKills:res.json().totalHonorableKills
                });
            }))
    }

    

    /*
    public getAllPlayerProfileStats():any{
         this.players.forEach((player)=>{
            return this.http.get(`https://us.api.battle.net/wow/character/
            ${player.server}/
            ${player.name}?locale=en_US&apikey=kd9qpxf7u2dabsjwhrnkdskmr57ec3y2
            `).pipe(map(res=>{
                return res.json().map(item=>{
                    console.log('innside stats function'); 
                    return new PlayerProfile({
                        name:item.name, 
                        realm:item.realm, 
                        battlegroup:item.battlegroup, 
                        class:item.class, 
                        race:item.race, 
                        gender:item.gender, 
                        level:item.level, 
                        achievements:item.achievementPoints, 
                        thumbnail:item.thumbnail, 
                        calcClass:item.calcClass,
                        faction:item.faction, 
                        totalHonorableKills:item.totalHonorableKills
                    });
                }); 
            })); 
        });  
    }
    */
    
}

