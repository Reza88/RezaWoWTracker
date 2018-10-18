import { Player } from './../shared/player.model';
import { PlayerService } from './../shared/player.service';
import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute} from '@angular/router'; 

@Component({
    selector:'wpt-player-detail', 
    templateUrl:'./player-detail.component.html', 
    styleUrls:['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit{

    val:any;
    playerInfo: Player[] = []; 

    constructor(private route:ActivatedRoute,private playerService:PlayerService){

    }
    ngOnInit(){
        this.route.params.subscribe((params)=>{
            this.val=params['playerId'];
        }); 
        this.playerService.getPlayerRanksAndRoles(this.val).subscribe((data)=>{
            this.playerInfo=data; 
        })
        console.log(this.playerInfo); 

    }
}