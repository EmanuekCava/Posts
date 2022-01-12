import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './routes/posts/posts.component';
import { CreateComponent } from './routes/create/create.component';

import { PostsService } from "../app/services/posts.service";

import { AppRoutingModule } from './app-routing.module';
import { PostComponent } from './routes/post/post.component';
import { UpdateComponent } from './routes/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    CreateComponent,
    PostComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
