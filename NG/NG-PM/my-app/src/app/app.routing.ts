
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ProductService } from './product.service';
import { ProductListResolverService } from './product-list-resolver.service';
import { ProductComponent } from './product/product.component';
import { ProductResolverService } from './product-resolver.service';
import { ProductFormComponent } from './product-form/product-form.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';

let appRoutes: Routes = [
    {
        path: 'products',
        component: ProductListComponent,
        resolve: {
            products: ProductListResolverService
        }
    },
    {
        path: 'products/:prodId',
        component: ProductComponent,
        resolve: {
            product: ProductResolverService
        }
    },
    {
        path: 'product-new',
        component: ProductFormComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    { path: '', component: HomeComponent },
    { path: '**', component: NotFoundComponent },
];


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        ProductService,
        ProductListResolverService,
        ProductResolverService,
        AuthGuardService
    ]
})
export class AppRoutingModule { }
