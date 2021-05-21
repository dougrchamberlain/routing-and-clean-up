import { AppRootComponent } from './src/app/app-root/app-root.component';
import { AppRoutingModule } from './src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TelemetryService } from './src/app/telemetry.service';

@NgModule({
  bootstrap: [AppRootComponent],
  declarations: [AppRootComponent],
  entryComponents: [AppRootComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    NgxDocViewerModule,
    ReactiveFormsModule
  ],
  providers: [TelemetryService]
})
export class MedicationsModule {}

platformBrowserDynamic()
  .bootstrapModule(MedicationsModule)
  .catch(err => console.error(err));
