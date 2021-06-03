import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-test',
  templateUrl: './popup-test.component.html',
  styleUrls: ['./popup-test.component.scss']
})
export class PopupTestComponent implements OnInit {
  @Input() lastName = 'lubchenko';

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      console.log(1);
    }, 1000)
  }

}
