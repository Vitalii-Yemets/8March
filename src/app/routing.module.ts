import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PostcardComponent } from './components/postcard/postcard.component'
import { CatComponent } from './components/cat/cat.component'

const appRoutes: Routes = [
    { path: '', component: PostcardComponent },
    { path: 'cat', component: CatComponent },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule { }