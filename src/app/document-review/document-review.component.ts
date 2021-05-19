import { Component, Input, OnInit } from '@angular/core';
import { PatientDocument } from '../interfaces/patient-document';

@Component({
  selector: 'document-review',
  templateUrl: './document-review.component.html',
  styleUrls: ['./document-review.component.scss']
})
export class DocumentReviewComponent implements OnInit {
  @Input() doc: PatientDocument;
  constructor() {}

  ngOnInit(): void {}
}
