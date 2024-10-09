import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('ProfileComponent constructor called');
  }

  ngOnInit(): void {
    console.log('ProfileComponent ngOnInit called');
  }

  ngOnDestroy(): void {
    console.log('ProfileComponent ngOnDestroy called');
  }
}

