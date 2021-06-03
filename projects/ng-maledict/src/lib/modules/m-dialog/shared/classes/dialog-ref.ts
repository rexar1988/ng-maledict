import { Observable, Subject } from 'rxjs';

export class DialogRef {
  private readonly _afterClosed$ = new Subject<unknown>();

  close(result?: unknown): void {
    this._afterClosed$.next(result);
  }

  afterClosed: Observable<unknown> = this._afterClosed$.asObservable();
}
