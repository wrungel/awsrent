import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Apartment, APIService } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'awsrent';
  public createForm: FormGroup;
  public apartments: Array<Apartment> = [];

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      alias: ['', Validators.required],
      address: ['', Validators.required],
      area: ['', Validators.required]
    });
  }

  public onCreate(apartment: Apartment) {
    this.api
      .CreateApartment(apartment)
      .then((event) => {
        console.log('apartment created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating restaurant...', e);
      });
  }

  async ngOnInit() {
    /* fetch restaurants when app loads */
    this.api.ListApartments().then((event) => {
      this.apartments = event.items as Apartment[];
    });
  }
}
