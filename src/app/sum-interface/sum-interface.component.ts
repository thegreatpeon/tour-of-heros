import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { MessageService } from '../message.service';
import { SumServiceService } from '../sum-service.service';

@Component({
  selector: 'app-sum-interface',
  templateUrl: './sum-interface.component.html',
  styleUrls: ['./sum-interface.component.css']
})
export class SumInterfaceComponent {
  value1: number;
  value2: number;
  sum: number;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private sumService: SumServiceService) {
    this.value1 = 0;
    this.value2 = 0;
    this.sum = 0;
  }
  sumAPI() {
      this.sumService.getSumAPI(this.value1, this.value2).subscribe(data => this.sum = data);
  }
  sumLocal(){
    this.log('Calling local Summation');
    this.sum = Number(this.value1 + this.value2);
  }  
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
