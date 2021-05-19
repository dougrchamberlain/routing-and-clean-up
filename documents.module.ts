import { AppRootComponent } from './src/app/app-root/app-root.component';
import { AppRoutingModule } from './src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DocumentContainerComponent } from './src/app/document-container/document-container.component';
import { DocumentDetailComponent } from './src/app/document-detail/document-detail.component';
import { DocumentEditComponent } from './src/app/document-edit/document-edit.component';
import { DocumentListComponent } from './src/app/document-list/document-list.component';
import { DocumentMaterialModule } from './src/material-module';
import { DocumentReviewComponent } from './src/app/document-review/document-review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupByPipe } from './groupby.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { PatientDocumentsService } from './src/app/documents-service/documents-api.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TelemetryService } from './src/app/telemetry.service';

@NgModule({
  bootstrap: [AppRootComponent],
  declarations: [
    AppRootComponent,
    DocumentContainerComponent,
    DocumentDetailComponent,
    DocumentEditComponent,
    DocumentListComponent,
    DocumentReviewComponent,
    GroupByPipe
  ],
  entryComponents: [AppRootComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    DocumentMaterialModule,
    FormsModule,
    HttpClientModule,
    NgxDocViewerModule,
    ReactiveFormsModule
  ],
  providers: [GroupByPipe, PatientDocumentsService, TelemetryService]
})
export class DocumentsModule {}

platformBrowserDynamic()
  .bootstrapModule(DocumentsModule)
  .catch(err => console.error(err));
