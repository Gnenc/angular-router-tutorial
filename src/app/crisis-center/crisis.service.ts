import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  static nextCrisisId = 100;
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);
  constructor(
    private messageService: MessageService
  ) { }

  getCrises() {
    return this.crises$;
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      // (+) before 'id' turns the string into a number
      map((crises: Crisis[]) => crises.find(crisis => crisis.id === +id))
    );
  }

  addCrisis(name: string) {
    name = name.trim();
    if (name) {
      const crisis = { id: CrisisService.nextCrisisId++, name: name };
      CRISES.push(crisis);
      this.crises$.next(CRISES);
    }
  }
}