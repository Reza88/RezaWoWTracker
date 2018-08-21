import { KeysPipe } from './shared/KeysPipe.pipe';
import { NgModule } from "@angular/core";
import { HttpModule } from '@angular/http';
import { CommonModule } from '../../../node_modules/@angular/common';
import {Routes, RouterModule} from '@angular/router'; 



import { PlayerListItemComponent } from './player-list-item/player-list-item.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerComponent } from './player.component';

import {PlayerService} from './shared/player.service'; 
const routes :Routes = [ 
    {path:'players',component:PlayerComponent, 
    children:[
        {path:'',component:PlayerListComponent},
        {path:':playerId', component:PlayerDetailComponent}
    ]}
]

@NgModule({
    declarations:[
        PlayerListComponent,
        PlayerDetailComponent, 
        PlayerListItemComponent,
        PlayerComponent,
        KeysPipe,        
    ], 
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        HttpModule
    ], 
    providers:[
        PlayerService
    ]
})
export class PlayerModule{}