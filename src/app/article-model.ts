export interface Article {
  id: number;
  title: string;
  text: string;
  link: string;
  showText: boolean; // Existing property for toggling text visibility
  buttonText: string; // Add the buttonText property
}