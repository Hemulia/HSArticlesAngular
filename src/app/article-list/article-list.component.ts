import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article-service';
import { Router } from '@angular/router';
import { Article } from '../article-model';
import { RefreshStatusService } from '../refresh-status/refresh-status.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = []; // Array to hold the list of articles
  articleSet: Set<number> = new Set(); // Set to track unique article IDs

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private refreshStatusService: RefreshStatusService // Inject the service for managing refresh status
  ) { }

  ngOnInit(): void {
    // Check if a refresh request has been sent from the AppComponent
    if (this.refreshStatusService.isRefreshRequestSent()) {
      // If refresh request has been sent, wait for it to complete
      this.articleService.getArticles().subscribe((data) => {
        // Filter and update the articles list with unique articles
        data.forEach((article) => {
          if (!this.articleSet.has(article.id)) {
            this.articles.push(article);
            this.articleSet.add(article.id);
          }
        });

        // Initialize showText and buttonText properties for each article
        this.articles.forEach((article) => {
          article.showText = false; // Initialize the "showText" flag to false
          article.buttonText = 'Lue lisää'; // Initialize the button text
        });
      });
    } else {
      // If refresh request hasn't been sent, load articles immediately
      this.loadArticles();
    }
  }

  // Function to toggle the display of article text
  toggleText(article: Article): void {
    article.showText = !article.showText; // Toggle the "showText" flag
    article.buttonText = article.showText ? 'Piilota' : 'Lue lisää'; // Update the button text
  }

  // Function to load articles
  loadArticles(): void {
    this.articleService.getArticles().subscribe((data: Article[]) => {
      // Filter and update the articles list with unique articles
      data.forEach((article) => {
        if (!this.articleSet.has(article.id)) {
          this.articles.push(article);
          this.articleSet.add(article.id);
        }
      });

      // Reset the button text for all articles
      this.articles.forEach(article => {
        article.buttonText = 'Lue lisää';
      });
    });
  }

  // Function to delete an article
  deleteArticle(articleId: any): void {
    this.articleService.deleteArticle(articleId).subscribe(() => {
      // Remove the deleted article from the articles list
      this.articles = this.articles.filter(article => article.id !== articleId);

      // Reset the button text for all articles
      this.articles.forEach(article => {
        article.buttonText = 'Lue lisää';
      });
    });
  }

  // Function to set text and disable an element
  setText(element: { textContent: any; disabled: boolean }, text: any) {
    element.textContent = text; // Set the text content
    element.disabled = true; // Disable the element
  }
}
