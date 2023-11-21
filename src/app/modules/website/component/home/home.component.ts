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
  env: string = environment.apiUrl
  constructor(private websiteService: WebsiteService) { }

  ngOnInit(): void {
    console.log(this.env)
    this.getListPub();
  }

  getListPub() {
    this.websiteService.listPub().subscribe((value) => {
      console.log(value)
      if (value) {
        this.dataPub = value
      }
    })
  }
}
