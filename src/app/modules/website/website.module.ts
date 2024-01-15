import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { HomeComponent } from './component/home/home.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { ServiceComponent } from './component/service/service.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { AboutComponent } from './component/about/about.component';
import { DevisComponent } from './component/devis/devis.component';
import { ServiceDetailComponent } from './component/service-detail/service-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PubComponent } from './component/pub/pub.component';
import { ArticleComponent } from './component/article/article.component';

@NgModule({
  declarations: [
    WebsiteComponent,
    HomeComponent,
    ServiceComponent,
    PortfolioComponent,
    AboutComponent,
    DevisComponent,
    ServiceDetailComponent,
    PubComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    LayoutsModule,
    ReactiveFormsModule
  ]
})
export class WebsiteModule { }
