// why are we creating folders that break if we must refactor?

import { ɵGetterFn } from '@angular/core';

export interface PatientDocument {
  url: any;
  description: string;
  type: string;
  subtype: string;
}

export class EditDocument {
  url: any;
  description: string | '';
  type: string;
  subtype: string;
  get dateReceived() {
    return new Date(Date.parse(`${this.description}`));
  }
}
