import { Observable } from 'rxjs';
import { HttpService } from './../../../common/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  constructor(private httpService: HttpService) { }

  listPub() {
    return this.httpService.getRequest('/article/published/all');
  }


  listPortfolio() {
    return this.httpService.getRequest('/portfolio/published/all');
  }
}
