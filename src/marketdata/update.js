import {inject} from 'aurelia-dependency-injection';
import {HttpClient} from 'aurelia-fetch-client';
import { Router } from 'aurelia-router';


@inject(Router, HttpClient)
export class update {

  constructor(router, client) {
    this.router = router;
    this.client = client;
  }
  activate(params) {
    this.client.fetch('data.json')
      .then(response => response.json())
      .then(companies => {
        this.company = companies.find(c => c.id.toString() === params.id)
      });
  }

  updateCompany() {
    //request to back end
  }

  goBack() {
    this.router.navigateToRoute('marketdata');
  }

  /*updatedCompany = new Company('', '', '', '', '');
  constructor(company, code, active, address, city) {
    this.company = company;
    this.code = code;
    this.active = active;
    this.address = address;
    this.city = city;
  }
  updateCompany() {
    this.updatedCompany.company = this.company.company
    if (this.updatedCompany.name === '') {
      this.updatedCompany.name = this.company.name;
    }
    if (this.updatedCompany.duration  === '') {
      this.updatedCompany.duration = this.company.duration;
    }
    if (this.updatedCompany.price  === '') {
      this.updatedCompany.price = this.company.price;
    }
    if (this.updatedCompany.description  === '') {
      this.updatedCompany.description = this.company.description;
    }
    this.updatedCompany.updateCompany(this.updatedCompany).subscribe();
  }
  companyNotChanged() {
    if (this.updatedCompany.company === '') {
      if (this.updatedCompany.active === '') {
        if (this.updatedCompany.address === '') {
          if (this.updatedCompany.city === '') {
            return true;
          }
        }
      }
    }
    return false;
  }*/
}
