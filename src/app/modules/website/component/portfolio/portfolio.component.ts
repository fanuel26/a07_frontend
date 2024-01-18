import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../common/website.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  dataPortfolio: any = [];
  dataSelect: any = {};
  env: string = environment.apiUrl
  constructor(private websiteService: WebsiteService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getListPortfolio();
  }



  getListPortfolio() {
    this.websiteService.listPortfolio().subscribe((value) => {
      console.log(value)
      if (value) {
        this.dataPortfolio = value
      }
    })
  }

  getData(data: any) {
    this.dataSelect = data
  }
}
