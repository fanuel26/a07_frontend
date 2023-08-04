import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../common/website.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private websiteService: WebsiteService) { }

  ngOnInit(): void {
    this.getListPub();
  }

  getListPub() {
    this.websiteService.listPub().subscribe((value) => {
      console.log(value)
    })
  }
}
