import { Component, OnInit } from '@angular/core';
import { SpinnerInterface } from '../../../../../../interfaces/spinner.interface';

@Component({
  selector: 'm-ball-rotate',
  templateUrl: './ball-rotate.component.html',
  styleUrls: ['./ball-rotate.component.scss']
})
export class BallRotateComponent implements OnInit, SpinnerInterface {
  speed = '1s';
  loadingText = 'Loading...';
  showLoadingText = true;

  constructor() { }

  ngOnInit(): void {
  }

}
