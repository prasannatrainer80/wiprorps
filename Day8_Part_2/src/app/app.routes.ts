import { Routes } from '@angular/router';
import { Menu } from './menu/menu';
import { EmployShow } from './employ-show/employ-show';
import { EmploySearch } from './employ-search/employ-search';
import { EmployAdd } from './employ-add/employ-add';
import { EmployUpdate } from './employ-update/employ-update';
import { EmployDelete } from './employ-delete/employ-delete';
import { Login } from './login/login';

export const routes: Routes = [
    {path:'',component:Login},
    {path:'menu',component:Menu},
    {path:'menu',component:Menu,children:[
        {path:'employshow',component:EmployShow,
            outlet:'wipro'},
        {path:'employsearch',component:EmploySearch,
            outlet:'wipro'},    
        {path:'employadd',component:EmployAdd,
            outlet:'wipro'},
        {path:'employupdate',component:EmployUpdate,
            outlet:'wipro'},
        {path:'employdelete',component:EmployDelete,
            outlet:'wipro'},
                
    ]}
];
