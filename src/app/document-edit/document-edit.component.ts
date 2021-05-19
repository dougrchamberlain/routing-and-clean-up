import { Component } from '@angular/core';
import { EditDocument } from '../interfaces/patient-document';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { PatientDocumentsService } from '../documents-service/documents-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'summary-document-edit',
  styleUrls: ['./document-edit.component.scss'],
  templateUrl: './document-edit.component.html'
})
export class DocumentEditComponent {
  patientDocument = this.fb.group({
    type: [null],
    subtype: [null],
    dateReceived: [null, Validators.required],
    reviewer: null,
    location: [null, Validators.required],
    picker: [null, Validators.required]
  });

  doc: EditDocument = {
    dateReceived: new Date(),
    description: '',
    subtype: '',
    type: '',
    url: ''
  };
  types: any[];
  subTypes: any[];

  constructor(
    private fb: FormBuilder,
    private documents: PatientDocumentsService,
    private router: Router,
    private route: ActivatedRoute,
    private client: HttpClient
  ) {}

  updateDocument(): void {
    console.log(this.router);
    this.router.navigate([environment.viewRouteUrl], {
      relativeTo: this.route
    });
  }

  ngOnInit() {
    this.client // refactor this into a service. probably a simple service to access the lookup tables
      .get(environment.fileTypeApiUrl) //typically KB data
      .subscribe((response: any) => (this.types = response));

    this.client // refactor this into a service. probably a simple service to access the lookup tables
      .get(environment.subTypeApiUrl) //typically KB data
      .subscribe((response: any) => (this.subTypes = response));

    this.documents.stateChanged.subscribe((state: any) => {
      if (state) {
        this.doc = state.document;
        //this is refactoring kids.
      }
    });
  }
}
