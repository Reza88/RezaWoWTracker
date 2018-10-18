import {Component, OnInit, Input} from '@angular/core'; 
import { PlayerService } from '../shared/player.service';


@Component({
    selector:'wpt-player-list-item', 
    templateUrl:'./player-list-item.component.html', 
    styleUrls:['./player-list-item.component.scss']
})
export class PlayerListItemComponent implements OnInit{
    @Input() player:any; 
    @Input() info:any;


    constructor(private playerService:PlayerService){
        
    }

    classColors:Array<any>=[
        {id:1, color:'#C79C6E'},
        {id:2, color:'#F58CBA'},
        {id:3, color:'#ABD473'},
        {id:4, color:'#FFF569'},
        {id:5, color:'#FFFFFF'},
        {id:6, color:'#C41F3B'},
        {id:7, color:'#0070DE'},
        {id:8, color:'#40C7EB'},
        {id:9, color:'#8787ED'},
        {id:10, color:'#00FF96'},
        {id:11, color:'#FF7D0A'},
        {id:12, color:'#A330C9'}

    ]

    mapPlayerToHeaders:Array<any>=[
        {name:'Arikin', image:'mattslogo.png'}, 
        {name:'Bashlul', image:'Random.png'},
        {name:'Rukawa', image:'testsmoke.png'},
        {name:'Raisauce', image:'warlocktest.png'},
        {name:'Rayhaanqt', image:'undeadmage.png'},
        {name:'Rezzy', image:'Random.png'},
        {name:'Wercho', image:'mattslogo.png'}, 
        {name:'Moneymastery', image:'undeadmage.png'}
    ]


    classIcons:Array<any>=[
        {id:1, image:'warrior.png'},
        {id:2, image:'paladin.png'},
        {id:3, image:'hunter.png'},
        {id:4, image:'rogue.png'},
        {id:5, image:'priest.png'},
        {id:6, image:'deathknight.png'},
        {id:7, image:'shaman.png'},
        {id:8, image:'mage.png'},
        {id:9, image:'warlock.png'},
        {id:10, image:'monk.png'},
        {id:11, image:'druid.png'},
        {id:12, image:'demonhunter.png'}

    ]
    classes: Array<any>=[
        {id: 1, name:'Warrior'},
        {id: 2, name:'Paladin'},
        {id: 3, name:'Hunter'},
        {id: 4, name:'Rogue'},
        {id: 5, name:'Priest'},
        {id: 6, name:'Death Knight'},
        {id: 7, name:'Shaman'},
        {id: 8, name:'Mage'},
        {id: 9, name:'Warlock'},
        {id: 10, name:'Monk'},
        {id: 11, name:'Druid'},
        {id: 12, name:'Demon Hunter'},
    ]

    races: Array<any>=[
        {id: 1, name:'Human'},
        {id: 2, name:'Orc'},
        {id: 3, name:'Dwarf'},
        {id: 4, name:'Night Elf'},
        {id: 5, name:'Undead'},
        {id: 6, name:'Tauren'},
        {id: 7, name:'Gnome'},
        {id: 8, name:'Troll'},
        {id: 9, name:'Goblin'}, 
        {id: 10, name:'Blood Elf'},
        {id: 11, name:'Draenei'},
        {id: 22, name:'Worgen'},
        {id: 25, name:'Panda'},
        {id:27,name:'Nightborne'}
    ]
    roles: Array<any>=[
        {name:'dps', image:'dps.png'},
    ]

    ngOnInit(){
        
    }

    
}