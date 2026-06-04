import { Routes } from '@angular/router';
import { Home } from './home/home';
import { CustomerLogin } from './customer-login/customer-login';
import { VendorLogin } from './vendor-login/vendor-login';
import { CustomerDashBoard } from './customer-dash-board/customer-dash-board';
import { CustomerInfo } from './customer-info/customer-info';
import { CustomerWallet } from './customer-wallet/customer-wallet';
import { CustomerOrders } from './customer-orders/customer-orders';
import { CustomerPendingOrders } from './customer-pending-orders/customer-pending-orders';
import { PlaceOrder } from './place-order/place-order';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'customerLogin',component:CustomerLogin},
    {path:'vendorLogin',component:VendorLogin},
    {path:'customerDashBoard',component:CustomerDashBoard},
    {path:'customerDashBoard',component:CustomerDashBoard,children:[
        {path:'customerInfo',component:CustomerInfo,outlet:'infinite'},
        {path:'customerWallet',component:CustomerWallet,outlet:'infinite'},
        {path:'customerOrders',component:CustomerOrders,outlet:'infinite'},
        {path:'customerPendingOrders',component:CustomerPendingOrders,outlet:'infinite'},
         {path:'placeOrder',component:PlaceOrder,outlet:'infinite'},
    ]},
    
];
