import { Component, OnInit, Input } from '@angular/core';
import { RssfeedService } from '../services/rssfeed.service';
import { Feed } from '../model/feed';
// import './rxjs-operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  // @Input() blogEntires: int;
  private feedUrl: string = 'http://rosstripi.tumblr.com/rss'; 
  private feeds: any;

  constructor(
    private feedService: RssfeedService
  ) { }

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedContent(this.feedUrl)
      .subscribe(
      feed => this.feeds = feed.items,
      error => console.log(error));
  }

}
