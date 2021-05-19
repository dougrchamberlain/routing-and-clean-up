import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { PatientDocument } from '../interfaces/patient-document';
import * as jmsepath from 'jmespath';
import { Observable } from 'rxjs/dist/types';
//we can move app insights in here. and remove a lot of injections through out the app

/**
 * @title DocumentsService
 * @Description provides a means to access documents from our API
 * does not require intimate understanding of the transforms, stores, or http calls
 *
 */
@Injectable({ providedIn: 'root' })
export class PatientDocumentsService extends ObservableStore<StoreState> {
  documentApiPath: string = environment.documentApiListUrl;
  constructor(private client: HttpClient) {
    super({ trackStateHistory: true });
    const initialState: StoreState = {
      documents: [],
      document: { url: '', description: '', subtype: '', type: '' }
    };
    this.setState(initialState, 'INIT_STATE');
  }

  get(id: any): Observable<PatientDocument[]> {
    const o$ = this.client.post<any>(
      this.documentApiPath,
      {},
      { params: { patientId: id } }
    );

    o$.subscribe({
      next: (data: any): void => {
        const documents = jmsepath.search(
          data.PracticeFileTypeModels,
          environment.jmesPathSearchString
        );
        this.setState({ documents }, StoreActions.GetDocuments);
        this.setState({ document: documents[0] }, StoreActions.selectDocument);
      }
    });
    return o$;
  }

  select(doc: PatientDocument) {
    this.setState({ document: doc });
  }
}
export interface StoreState {
  documents: PatientDocument[];
  document: PatientDocument | null;
}
export enum StoreActions {
  AddDocument = 'ADD_DOCUMENTS',
  RemoveDocument = 'REMOVE_DOCUMENTS',
  GetDocuments = 'GET_DOCUMENTS',
  SortDocuments = 'SORT_DOCUMENTS',
  selectDocument = 'SELECT_DOCUMENT'
}
