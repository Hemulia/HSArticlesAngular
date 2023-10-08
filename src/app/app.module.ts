import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleService } from './article-service';
import { RouterModule } from '@angular/router';
import { DeleteArticleComponent } from './delete-article/delete-article.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    DeleteArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,

    RouterModule.forRoot([
      { path: '', redirectTo: '/articles', pathMatch: 'full' },
      { path: 'articles', component: ArticleListComponent, },
    ])],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
