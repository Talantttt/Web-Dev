import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'ang', component: AppComponent },
    { path: 'login', component: LoginComponent },
    { path: 'item-list', component: ItemListComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }, 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}