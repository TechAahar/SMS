import { ComputerStorageComponent } from './computerStorage.component';
import { DesktopComponent } from './desktop.component';
import { LaptopComponent } from './laptop.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';

const routes: Routes = [

    {path: 'laptop', component: LaptopComponent},
    {path: 'desktop', component: DesktopComponent},
    {path: 'computerstorage', component: ComputerStorageComponent},
    {path: 'product', redirectTo: 'product', pathMatch: 'full'}
];

export const productroutes = RouterModule.forChild(routes);
