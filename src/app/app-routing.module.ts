import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { DeleteArticleComponent } from './delete-article/delete-article.component';
const routes: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: '', redirectTo: '/articles/list', pathMatch: 'full' },
  { path: 'articles/delete/:id', component: DeleteArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }