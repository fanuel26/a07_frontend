import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { WebsiteComponent } from './website.component';
import { ServiceComponent } from './component/service/service.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { DevisComponent } from './component/devis/devis.component';
import { AboutComponent } from './component/about/about.component';
import { ServiceDetailComponent } from './component/service-detail/service-detail.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'service',
        component: ServiceComponent,
      },
      {
        path: 'service/:id',
        component: ServiceDetailComponent,
      },
      {
        path: 'portfolio',
        component: PortfolioComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'devis',
        component: DevisComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
