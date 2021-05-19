import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PatientDocumentsService } from '../documents-service/documents-api.service';
import { events } from '../telemetry.events';
import { PatientDocument } from '../interfaces/patient-document';
import { TelemetryService } from '../telemetry.service';

@Component({
  selector: 'summary-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss']
})
export class DocumentDetailComponent implements OnInit, AfterViewInit {
  doc: PatientDocument | null;
  constructor(
    private telemetry: TelemetryService,
    private service: PatientDocumentsService
  ) {}

  ngOnInit() {
    this.service.stateChanged.subscribe((state: any) => {
      if (state) {
        this.doc = state.document;
      }
    });
  }

  ngAfterViewInit(): void {
    this.telemetry.logPageView(events.document_module_load);
  }
}
