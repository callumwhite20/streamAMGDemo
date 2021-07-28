import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private jsonURL = 'assets/data.json';
  public data:any;
  public moved:boolean = false;
  public route:string = 'home';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(jsonData => {
      this.data = jsonData;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
  }

  ngOnInit(): void {
    timer(0, 30000).pipe().subscribe(x =>{
       this.moved = !this.moved;
    });
  }

}
