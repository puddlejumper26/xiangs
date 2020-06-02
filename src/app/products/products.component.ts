import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav, MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input()
  mode: MatDrawerMode;
  
  constructor() { }

  ngOnInit(): void { }

}
