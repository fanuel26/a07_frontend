import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WebsiteService } from '../../common/website.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  dataPub: any;
  env: string = environment.apiUrl
  constructor(private websiteService: WebsiteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log('ID:', id);

      console.log(this.env)
      this.getListPub(id);
      // Now you can use the id in your component logic
    });
  }

  getListPub(id: number) {
    this.websiteService.listPub().subscribe((value) => {
      if (value) {
        let data = value
        data.forEach((item: any) => {
          if (item.id == id) {
            this.dataPub = item
            console.log(this.dataPub)
          }
        });
      }
    })
  }
}
