import { Component } from '@angular/core';
import { Post } from '../models/Post';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  model = new Post();

  constructor(private data: DataService) {}

  sendPost(){
    this.model.createdOn = new Date();

    console.log("Saving post", this.model);

    this.data.savePost(this.model);

    this.model = new Post();

  }

}

