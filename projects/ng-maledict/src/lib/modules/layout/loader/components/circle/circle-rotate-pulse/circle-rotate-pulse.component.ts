import { Component, OnInit } from '@angular/core';
import { SpinnerInterface } from '../../../../../../interfaces/spinner.interface';

@Component({
  selector: 'm-circle-rotate-pulse',
  templateUrl: './circle-rotate-pulse.component.html',
  styleUrls: ['./circle-rotate-pulse.component.scss']
})
export class CircleRotatePulseComponent implements OnInit, SpinnerInterface {
  loadingText = 'Loading...';
  showLoadingText = true;

  constructor() { }

  ngOnInit(): void {
  }

}
