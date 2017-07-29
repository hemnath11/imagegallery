import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewusersComponent } from './components/viewusers/viewusers.component';
import { ViewuserphotosComponent } from './components/viewuserphotos/viewuserphotos.component';


const routes: Routes = [
    {
        path: '',
        loadChildren: './components/users/users.module#UsersModule'
    },
    {
        path: 'users',
        loadChildren: './components/users/users.module#UsersModule'
    },
    {
        path: 'viewuseralbum/:id',
        component: ViewusersComponent
    },
    {
        path: 'viewuserphotos/:id',
        component: ViewuserphotosComponent
    },
    { path: '**', redirectTo: 'users' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }