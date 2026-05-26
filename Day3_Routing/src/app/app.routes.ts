import { Routes } from '@angular/router';
import { Menu } from './menu/menu';
import { First } from './first/first';
import { Second } from './second/second';
import { Third } from './third/third';
import { TwoWay } from './two-way/two-way';
import { EventDemo } from './event-demo/event-demo';
import { Calc } from './calc/calc';
import { CaseExample } from './case-example/case-example';
import { EmployShow } from './employ-show/employ-show';

export const routes: Routes = [
    {path:'',component:Menu},
    {path:'first',component:First},
    {path:'second',component:Second},
    {path:'third',component:Third},
    {path:'twoway',component:TwoWay},
    {path:'eventdemo',component:EventDemo},
    {path:'calc',component:Calc},
    {path:'caseexample',component:CaseExample},
    {path:'employshow',component:EmployShow}    
];
