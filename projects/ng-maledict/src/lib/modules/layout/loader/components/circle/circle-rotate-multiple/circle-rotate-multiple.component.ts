import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-circle-rotate-multiple',
  templateUrl: './circle-rotate-multiple.component.html',
  styleUrls: ['./circle-rotate-multiple.component.scss']
})
export class CircleRotateMultipleComponent implements OnInit {
  loadingText = 'Loading...';
  showLoadingText = true;

  constructor() { }

  ngOnInit(): void {
  }

}
