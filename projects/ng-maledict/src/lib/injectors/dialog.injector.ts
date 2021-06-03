import { InjectFlags, InjectionToken, Injector, ProviderToken, Type } from '@angular/core';

export class DialogInjector implements Injector {
  constructor(
    private injector: Injector,
    private additionalTokens: WeakMap<any, any>
  ) {}

  get<T>(token: ProviderToken<T>, notFoundValue?: T, flags?: InjectFlags): T;

  get(token: any, notFoundValue?: any): any;

  get(token: any, notFoundValue?: any, flags?: InjectFlags): any {
    const value = this.additionalTokens.get(token);

    if (value) {
      return value;
    }

    return this.injector.get<any>(token, notFoundValue);
  }
}
