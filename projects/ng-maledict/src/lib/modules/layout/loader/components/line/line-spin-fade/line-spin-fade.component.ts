import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-line-spin-fade',
  templateUrl: './line-spin-fade.component.html',
  styleUrls: ['./line-spin-fade.component.scss']
})
export class LineSpinFadeComponent implements OnInit {
  loadingText = 'Loading...';
  showLoadingText = true;

  constructor() { }

  ngOnInit(): void {
  }

}
