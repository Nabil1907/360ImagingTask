import { Injectable } from '@angular/core';
import { Post } from './post';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  // Node/Express API
  REST_API: string = 'http://localhost:8000/';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }

  // Add post
  addPost(data: Post): Observable<any> {
    console.log("result :")
    console.log(data)
    let API_URL = `${this.REST_API}/add-post`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  };
  // Get all Posts
  getAllPost() {
    return this.httpClient.get(`${this.REST_API}`);
  }
  // GET ONE POST 
  GetOnePost(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/get-post/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }
  //DELETE ONE POST
  deletePost(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-post/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    )
  }
  // Update POST
  updatePost(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-post/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
  // ADD COMMENT
  addComment(data: Post): Observable<any> {
    let API_URL = `${this.REST_API}/add-comment`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  };
  // GET ONE POST 
  getAllComments(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/get-comments/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }
  //DELETE Comment For Post 
  deleteComment(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-comment/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    )
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
