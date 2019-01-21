import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { IndexComponent } from './index/index.component';

const routes: Routes = [
    { path: '', component: IndexComponent, 
        children: [
            { path: '', loadChildren: 'src/app/presentation/home/home.module#HomeModule'}
        ] 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IndexRoutingModule { }
