import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class SumServiceService {

  baseURL: string = "http://localhost:5258/";
  arithmeticEntry = 'api/arithmetic/';

  getSumAPI(value1: number, value2: number): Observable<any> {
    const options = 
    {
      params: new HttpParams().append('Value1', value1).append('Value2', value2),
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const body = {};
    let tempURL = this.baseURL+this.arithmeticEntry+'SumValuesAnonymous';
    this.log(`Calling API Summation: ${tempURL}, Value1=${value1}, Value2=${value2}`);
    return this.http.post<number>(tempURL,{});
  }
  private log(message: string) {
    this.messageService.add(`SumService: ${message}`);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
}
