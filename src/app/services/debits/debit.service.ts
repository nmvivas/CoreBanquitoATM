import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebitService {

  private readonly DEBIT_URL = `${environment.coreAccountsApiUrl}/debit-cards`;
  private readonly ACCOUNT_TRANSACTION_URL = `${environment.coreAccountsApiUrl}/account-transactions`;

  constructor(private http: HttpClient) { }

  getAccountByPin(pin: string): Observable<any> {
    return this.http.get(`${this.DEBIT_URL}/account-by-pin/${pin}`);
  }

  createDebit(debit: any): Observable<any> {
    return this.http.post(`${this.ACCOUNT_TRANSACTION_URL}`, debit);
  }
}
