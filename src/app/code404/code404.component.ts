import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code404',
  templateUrl: './code404.component.html',
  styleUrls: ['./code404.component.scss'],
})
export class Code404Component implements OnInit {
  public countDown: number;
  private i: number = 0;

  constructor() {
    // using setInterval to contro the counting down
    setInterval((value) => {
      value = 30 - this.i;
      this.i = this.i + 1;
      this.countDown = value;
      if (value === 0) {
        // webpage would be navigated automatically to this location
        window.location.href = 'http://localhost:4200/';
      }
    }, 1000);
  }

  ngOnInit() {}
}
