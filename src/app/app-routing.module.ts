import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', loadChildren: './presentation/home/home.module#HomeModule', data: { animation: 'HomePage' } },
    { path: 'projects', loadChildren: './presentation/projects/projects.module#ProjectsModule', data: { animation: 'Projects' } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
