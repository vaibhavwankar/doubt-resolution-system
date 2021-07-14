import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoubtResolutionService {
  private serverUrl = 'api/doubtList';  // URL to web api
  private acceptDoubt: any;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getDoubtList(): Observable<any> {
    return this.http.get<any[]>(this.serverUrl)
      .pipe(
        tap(_ => this.log('fetched DoubtList')),
        catchError(this.handleError<any[]>('getDoubtList', []))
      );
  }

  addDoubt(doubt: { title: string; description: string; askedBy: string; time: string; Comments: { by: string; comment: string; }[];status:string }): Observable<any> {
    return this.http.post<any>(this.serverUrl, doubt, this.httpOptions).pipe(
      tap((newdoubt: any) => this.log(`added doubt with id=${newdoubt.id}`)),
      catchError(this.handleError<any>('addDoubt'))
    );
  }

  updateDoubt(doubt: { id: any; }):Observable<any>{
    return this.http.put(this.serverUrl, doubt, this.httpOptions).pipe(
      tap(_ => this.log(`updated doubt id=${doubt.id}`)),
      catchError(this.handleError<any>('updateDoubt'))
    );
  }

  setAcceptData(data: any): Observable<any>{
    return of(this.acceptDoubt = data);
  }
  getAcceptData():Observable<any>{
    return of(this.acceptDoubt);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(`DoubtResolutionService: ${message}`);
  }
}
