import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() selected:any;
  @Input() open:any;
  @Output() openChange = new EventEmitter<any>();

  constructor() { }

  public toggleSideNav() {
    this.openChange.emit(!this.open);

    let body = document.body;
    body.style.height = '';
    body.style.overflowY = '';
  }

  ngOnInit(): void {
  }

}
