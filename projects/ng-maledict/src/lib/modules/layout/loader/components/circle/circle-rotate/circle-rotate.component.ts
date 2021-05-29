import { Component, OnInit } from '@angular/core';
import { SpinnerInterface } from '../../../../../../interfaces/spinner.interface';

@Component({
  selector: 'm-circle-rotate',
  templateUrl: './circle-rotate.component.html',
  styleUrls: ['./circle-rotate.component.scss']
})
export class CircleRotateComponent implements OnInit, SpinnerInterface {
  loadingText = 'Loading...';
  showLoadingText = true;

  constructor() { }

  ngOnInit(): void {
  }
}
