import { Observable } from 'rxjs';
import { HttpService } from './../../../common/http.service';
import { Injectable } from '@angular/core';
import { HttpStatusCode } from '@angular/common/http';

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

  listCarousel() {
    return this.httpService.getRequest('/caroussel/all');
  }

  saveDevis(body: any) {
    return this.httpService.postRequest('/demandes/save', body);
  }
}
