import { Component, OnInit } from '@angular/core';
import { SpinnerInterface } from '../../../../../../interfaces/spinner.interface';

@Component({
  selector: 'm-line-scale-party',
  templateUrl: './line-scale-party.component.html',
  styleUrls: ['./line-scale-party.component.scss']
})
export class LineScalePartyComponent implements OnInit, SpinnerInterface {
  speed = '0.54s';
  loadingText = 'Loading...';
  showLoadingText = true;

  constructor() { }

  ngOnInit(): void {
  }
}
