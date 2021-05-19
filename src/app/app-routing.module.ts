import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentContainerComponent } from './document-container/document-container.component';
import { DocumentDetailComponent } from './document-detail/document-detail.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';
const routes: Routes = [
  {
    path: 'documents/:patientId',
    component: DocumentContainerComponent,
    children: [
      {
        path: 'edit',
        component: DocumentEditComponent
      },
      { path: 'view', component: DocumentDetailComponent }
    ]
  },
  {
    path: '**',
    redirectTo: '/documents',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
