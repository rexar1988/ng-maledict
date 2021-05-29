import { Component, OnInit } from '@angular/core';
import { SpinnerInterface } from '../../../../../../interfaces/spinner.interface';

@Component({
  selector: 'm-ball-grid-beat',
  templateUrl: './ball-grid-beat.component.html',
  styleUrls: ['./ball-grid-beat.component.scss']
})
export class BallGridBeatComponent implements OnInit, SpinnerInterface {
  speed = '1s';
  loadingText = 'Loading...';
  showLoadingText = true;

  constructor() { }

  ngOnInit(): void {
  }

}
