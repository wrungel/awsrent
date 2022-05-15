import { Component, OnInit } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { Apartment } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'awsrent';

  async ngOnInit() {
    await DataStore.save(
    new Apartment({
		"alias": "Lorem ipsum dolor sit amet",
		"address": "Lorem ipsum dolor sit amet",
		"area": 123.45
	})
    );    
  }
}
