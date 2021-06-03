import { TestBed } from '@angular/core/testing';

import { MDialogService } from './m-dialog.service';

describe('MDialogService', () => {
  let service: MDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
