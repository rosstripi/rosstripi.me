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
  private feedUrl: string = 'https%3A%2F%2Fwww.becompany.ch%2Fen%2Fblog%2Ffeed.xml';
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
