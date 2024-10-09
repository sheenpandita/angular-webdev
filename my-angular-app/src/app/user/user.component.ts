import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('UserComponent constructor called');
  }

  ngOnInit(): void {
    console.log('UserComponent ngOnInit called');
  }

  ngOnDestroy(): void {
    console.log('UserComponent ngOnDestroy called');
  }
}
