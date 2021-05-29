import { Component, OnInit } from '@angular/core';
import { SpinnerInterface } from '../../../../../../interfaces/spinner.interface';

@Component({
  selector: 'm-ball-pulse',
  templateUrl: './ball-pulse.component.html',
  styleUrls: ['./ball-pulse.component.scss']
})
export class BallPulseComponent implements OnInit, SpinnerInterface {
  loadingText = 'Loading...';
  showLoadingText = true;

  constructor() { }

  ngOnInit(): void {
  }

}
