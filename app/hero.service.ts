/**
 * Created by Administrator on 2016/7/5.
 */

import { Injectable} from '@angular/core';
import {HEROS} from "./mock-heroes";

@Injectable()
export class HeroService{

    getHeroes(){
        return Promise.resolve(HEROS);
    }
}