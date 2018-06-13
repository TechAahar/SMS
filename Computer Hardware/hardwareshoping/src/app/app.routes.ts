import { ProductComponent } from './product/product.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
// import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'product', component: ProductComponent},
    {path: 'blogs', component: BlogComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo: '/home', pathMatch: 'full'},
];

export const mainroutes = RouterModule.forRoot(routes);
