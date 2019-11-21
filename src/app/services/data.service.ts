import { Injectable } from '@angular/core';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {
posts: Post[] = [];

  constructor() { }

  public savePost(post) {
    this.posts.push(post);
  }

public getAllPost(){
  return this.posts;
}

}

