import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebsiteService } from '../../common/website.service';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit {
  devisForm!: FormGroup;

  constructor(private websiteService: WebsiteService) { }

  ngOnInit(): void {
    this.devisForm = new FormGroup({
      nom: new FormControl("", Validators.required),
      prenoms: new FormControl("", Validators.required),
      telephone: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      nomProjet: new FormControl("", Validators.required),
      nomDomaine: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
    });
  }

  onSubmit() {
    console.log(this.devisForm.value)
    this.websiteService.saveDevis(this.devisForm.value).subscribe(val => {
      console.log(val)
    })
  }

}
