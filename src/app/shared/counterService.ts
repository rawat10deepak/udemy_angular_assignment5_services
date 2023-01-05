import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  activeToInactivecounter = 0;
  inactiveToActivecounter = 0;

  updateCounter(type: string) {
    if (type === 'onSetToInactive') {
      this.activeToInactivecounter++;
      console.log('activeToInactivecounter - ' + this.activeToInactivecounter);
    } else if (type === 'onSetToActive') {
      this.inactiveToActivecounter++;
      console.log('inactiveToActivecounter - ' + this.inactiveToActivecounter);
    }
  }
}
