import { PlayerProfile } from './../shared/playerprofile.model';
import { PlayerService } from './../shared/player.service';
import { Player } from './../shared/player.model';
import {Component, OnInit} from '@angular/core'; 

@Component({
    selector:'wpt-player-list', 
    templateUrl:'./player-list.component.html', 
    styleUrls:['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit{
    
    playerProfiles: PlayerProfile[] = []; 


    
    constructor(private playerService:PlayerService){
        
    }
    
    
    ngOnInit(){
        this.playerService.getAllPlayerProfilesStats().subscribe((data)=>{
            this.playerProfiles.push(data); 
            this.playerProfiles.sort((a,b) => a.name.localeCompare(b.name));
        });


    }
 
    
}