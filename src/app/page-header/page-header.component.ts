import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() selected:any;
  public sideNavOpen:boolean = false;

  public toggleSideNav() {
    this.sideNavOpen = !this.sideNavOpen;

    let body = document.body;
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
