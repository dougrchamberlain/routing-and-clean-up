import { Component, Input, OnInit } from '@angular/core';
import { PatientDocumentsService } from '../documents-service/documents-api.service';
import { events } from '../telemetry.events';
import { TelemetryService } from '../telemetry.service';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/dist/types';

/**
 * @title List with expandable panels for each file type
 */
@Component({
  styleUrls: ['./document-container.component.scss'],
  selector: 'summary-document-container',
  templateUrl: './document-container.component.html'
})
export class DocumentContainerComponent implements OnInit {
  @Input() patientId: string;
  subscription$: Subscription;
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PatientDocumentsService,
    private telemetry: TelemetryService
  ) {}

  ngOnInit(): void {
    this.getDocuments();
  }

  private getDocuments() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.subscription$ = this.service.get(id).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.telemetry.logPageView(events.document_module_load);
  }
}
