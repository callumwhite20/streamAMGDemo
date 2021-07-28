import { Component, OnInit, Input } from '@angular/core';
import { DateService } from 'src/app/sevices/date/date.service';

@Component({
  selector: 'app-fight-card',
  templateUrl: './fight-card.component.html',
  styleUrls: ['./fight-card.component.scss']
})
export class FightCardComponent implements OnInit {
  @Input() data:any;
  public selected = 0;

  constructor(private dateService: DateService) { }

  public niceDate(date:string): string {
    return this.dateService.niceDate(date);
  }

  public select(index:number) {
    this.selected = index;
  }

  ngOnInit(): void {
  }

}
