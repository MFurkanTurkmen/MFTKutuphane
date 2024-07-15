import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
export const routes: Routes = [
    
    {
        path: '',component:LayoutComponent, children:[
            {path:'kitap/list',loadComponent: ()=> import('./kitap/kitap-list/kitap-list.component').then(k=>k.KitapListComponent)}
        ]
    }

];
