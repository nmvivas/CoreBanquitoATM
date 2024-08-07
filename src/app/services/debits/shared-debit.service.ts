import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDebitService {

  private account: any;
  private amount: number = 0;

  constructor() { }

  getAccount = () => this.account;

  setAccount = (account: any) => this.account = account;

  getAmount = () => this.amount;

  setAmount = (amount: number) => this.amount = amount;
}
