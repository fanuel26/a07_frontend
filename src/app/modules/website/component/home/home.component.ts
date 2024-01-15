import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../common/website.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataPub: any;
  dataPortfolio: any;
  dataCarousel: any;
  env: string = environment.apiUrl
  constructor(private websiteService: WebsiteService) { }

  ngOnInit(): void {
    console.log(this.env)
    this.getListPub();
    this.getlistCarousel();
    this.getListPortfolio()
  }

  getListPub() {
    this.websiteService.listPub().subscribe((value) => {
      console.log(value)
      if (value) {
        this.dataPub = value
      }
    })
  }

  getlistCarousel() {
    this.websiteService.listCarousel().subscribe((value) => {
      console.log(value)
      if (value) {
        this.dataCarousel = value
      }
    })
  }




  getListPortfolio() {
    this.websiteService.listPortfolio().subscribe((value) => {
      console.log(value)
      if (value) {
        this.dataPortfolio = value.slice(0, 4)
      }
    })
  }
}
