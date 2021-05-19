import { OnInit, Component } from '@angular/core';
import { PatientDocumentsService } from '../documents-service/documents-api.service';
import { events } from '../telemetry.events';
import { PatientDocument } from '../interfaces/patient-document';

import { TelemetryService } from '../telemetry.service';

@Component({
  selector: 'document-list',
  templateUrl: 'document-list.component.html',
  styleUrls: ['document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  documents: any = [];

  constructor(
    private service: PatientDocumentsService,
    private telemetry: TelemetryService
  ) {}

  ngOnInit(): void {
    this.service.stateChanged.subscribe((state: any) => {
      if (state) {
        console.log(state.documents);
        this.documents = state.documents;
      }
    });
  }

  onDocumentClick(doc: PatientDocument) {
    this.trackClick(doc);
    this.service.select(doc);
  }

  typeCollapsed(type: string): void {
    this.telemetry.logEvent(events.document_list_collapse, { type });
  }

  typeExpanded(type: string): void {
    this.telemetry.logEvent('list:expand', { type });
  }

  trackClick(doc: PatientDocument): void {
    this.telemetry.logEvent('patient:document:click', { doc });
  }
}
