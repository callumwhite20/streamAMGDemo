import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DateService } from 'src/app/sevices/date/date.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeadlineComponent implements OnInit {
  @Input() data:any;
  public headline:any;
  public fighter1:HTMLElement;
  public fighter1bg:HTMLElement;
  public fighter2:HTMLElement;
  public fighter2bg:HTMLElement;

  constructor(private dateService: DateService) {
    this.fighter1 = Array.from(document.getElementsByClassName('fighter-1-fg') as HTMLCollectionOf<HTMLElement>)[0];
    this.fighter1bg = Array.from(document.getElementsByClassName('fighter-1-bg') as HTMLCollectionOf<HTMLElement>)[0];
    this.fighter2 = Array.from(document.getElementsByClassName('fighter-2-fg') as HTMLCollectionOf<HTMLElement>)[0];
    this.fighter2bg = Array.from(document.getElementsByClassName('fighter-2-bg') as HTMLCollectionOf<HTMLElement>)[0];
  }

  public niceDate(date:string, time:string): string {
    return this.dateService.niceDate(date,time);
  }

  private moveFighters(position:number = 0) {
    this.fighter1 ? this.fighter1.style.left = '-' + (position/6 -20) + 'px' : '';
    this.fighter1bg ? this.fighter1bg.style.left = '-' + position/6 + 'px' : '';
    this.fighter2 ? this.fighter2.style.right = '-' + (position/6 -20) + 'px' : '';
    this.fighter2bg ? this.fighter2bg.style.right = '-' + position/6 + 'px' : '';
  }

  ngOnInit(): void {
    this.data['matches'].some((match:any) => {
      if (match.headline) {
        this.headline = match;
        return true;
      }

      return false;
    });

    this.fighter1 = Array.from(document.getElementsByClassName('fighter-1-fg') as HTMLCollectionOf<HTMLElement>)[0];
    this.fighter1bg = Array.from(document.getElementsByClassName('fighter-1-bg') as HTMLCollectionOf<HTMLElement>)[0];
    this.fighter2 = Array.from(document.getElementsByClassName('fighter-2-fg') as HTMLCollectionOf<HTMLElement>)[0];
    this.fighter2bg = Array.from(document.getElementsByClassName('fighter-2-bg') as HTMLCollectionOf<HTMLElement>)[0];

    setTimeout(() => {
      this.fighter1 ? this.fighter1.style.left = '0px' : '';
      this.fighter1bg ? this.fighter1bg.style.left = '0px' : '';
      this.fighter2 ? this.fighter2.style.right = '0px' : '';
      this.fighter2bg ? this.fighter2bg.style.right = '0px' : '';
    }, 1000);

    let lastKnownScrollPosition = 0;

    document.addEventListener('scroll', () => {
      lastKnownScrollPosition = window.scrollY;
    
      window.requestAnimationFrame(() => {
        this.moveFighters(lastKnownScrollPosition);
      });
    });
  }

}
