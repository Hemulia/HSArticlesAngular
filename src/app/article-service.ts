
import { CustomResponse } from './CustomRespone';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of,tap } from 'rxjs';
import { Article } from './article-model';

const url = 'http://localhost:8080/articles';
const apiUrl = 'http://localhost:8080/articles/list';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) {}

 getArticleById(articleId: any): Observable<any> {
  return this.http.get<Article>(`${url}/${articleId}`);
}


  getArticles(): Observable<any[]> {
    return this.http.get<any[]>(apiUrl);
  }

  deleteArticle(articleId: any): Observable<any> {
    return this.http.delete(`${url}/delete/${articleId}`);
}
}
