import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
})
export class DeleteArticleComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteArticleComponent>, // Reference to the dialog
    @Inject(MAT_DIALOG_DATA) public data: any // Data passed to the dialog
  ) {}

  // Function to handle cancel button click
  onCancelClick(): void {
    this.dialogRef.close(false); // Close the dialog with 'false' as the result
  }

  // Function to handle delete button click
  onDeleteClick(): void {
    this.dialogRef.close(true); // Close the dialog with 'true' as the result
  }
}