import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { RootComponent } from './components/root/root.component'
import { PostcardComponent } from './components/postcard/postcard.component'
import { CatComponent } from './components/cat/cat.component'

import { RoutingModule } from './routing.module'

@NgModule({
  declarations: [
    PostcardComponent,
    RootComponent,
    CatComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {
}
