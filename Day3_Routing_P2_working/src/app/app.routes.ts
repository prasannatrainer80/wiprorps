import { Routes } from '@angular/router';
import { First } from './first/first';
import { Menu } from './menu/menu';
import { Second } from './second/second';
import { Third } from './third/third';
import { Four } from './four/four';
import { Five } from './five/five';
import { TwoWay } from './two-way/two-way';
import { Calc } from './calc/calc';
import { Login } from './login/login';
import { CaseExample } from './case-example/case-example';
import { EmployShow } from './employ-show/employ-show';

export const routes: Routes = [
    {path:'',component:Login},
    {path:'menu',component:Menu,children :[
        {path:'first',component:First,outlet:'infinite'},
        {path:'second',component:Second,outlet:'infinite'},
        {path:'third',component:Third,outlet:'infinite'},
        {path:'four',component:Four,outlet:'infinite'},
        {path:'five',component:Five,outlet:'infinite'},
        {path:'twoway',component:TwoWay,outlet:'infinite'},
        {path:'calc',component:Calc,outlet:'infinite'},
        {path:'caseexample',component:CaseExample,outlet:'infinite'},
        {path:'employshow',component:EmployShow,outlet:'infinite'}
    ]},   
];
