import { Article } from "./article-model";

export interface CustomResponse {
    timeStamp: Date;
    statusCode: number;
    status: string;
    reason: string;
    message:string;
    developerMessage: string;
    data: {articles: Article[], article?: Article}
}