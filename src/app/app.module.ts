import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecordsComponent } from './records/records.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataentryComponent } from './dataentry/dataentry.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { InfoComponent } from './info/info.component';
import { VaccineformComponent } from './vaccineform/vaccineform.component';
import { EditvaccinedataComponent } from './editvaccinedata/editvaccinedata.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecordsComponent,
    DataentryComponent,
    EditComponent,
    InfoComponent,
    VaccineformComponent,
    EditvaccinedataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
