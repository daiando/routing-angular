import { CanDeactivate } from "@angular/router";
import { Observable } from "rxjs/Rx";

export interface FooBarComponentCanDeactivate {
  testcanDeactivate: () => boolean | Observable<boolean>;
}

export class UserEditGuard implements CanDeactivate<FooBarComponentCanDeactivate> {
  canDeactivate(component: FooBarComponentCanDeactivate): Observable<boolean> | boolean {
    return component.testcanDeactivate ? component.testcanDeactivate() : true;
  }
}
