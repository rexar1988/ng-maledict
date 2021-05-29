import { Component, OnInit } from '@angular/core';
import { SpinnerInterface } from '../../../../../../interfaces/spinner.interface';

@Component({
  selector: 'm-ball-grid-pulse',
  templateUrl: './ball-grid-pulse.component.html',
  styleUrls: ['./ball-grid-pulse.component.scss']
})
export class BallGridPulseComponent implements OnInit, SpinnerInterface {
  loadingText = 'Loading...';
  showLoadingText = true;

  constructor() { }

  ngOnInit(): void {
  }

}
