import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Carnaval } from 'src/app/shared/model/carnaval.model';

@Injectable({
  providedIn: 'root'
})
export class BaresService {

  url = 'http://a8a8-45-6-14-90.ngrok.io';

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem dados carnaval
  getBares(): Observable<Carnaval[]> {
    return this.httpClient.get<Carnaval[]>(this.url + '/bares')
      .pipe(
        retry(2),
        catchError(this.handleError))
  }



  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
