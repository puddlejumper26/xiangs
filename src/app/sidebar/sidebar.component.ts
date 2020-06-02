import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  // Here in order to send this customClick to parent component (productsComponent)
  // then everytime a link is clicked, will triger the close() in the <mat-sidenav>
  @Output() customClick = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onClicked() {
    this.customClick.emit(1);
  }
}
