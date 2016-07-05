/**
 * Created by Administrator on 2016/7/5.
 */

import { provideRouter,RouterConfig} from '@angular/router';


import {HeroesComponent} from "./heroes.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";


const routes:RouterConfig = [
    {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },{
        path:'detail/:id',
        component:HeroDetailComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];