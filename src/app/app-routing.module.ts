import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecordsComponent } from './records/records.component';
import { DataentryComponent } from './dataentry/dataentry.component';
import { EditComponent } from './edit/edit.component';
import { InfoComponent } from './info/info.component';
import { VaccineformComponent } from './vaccineform/vaccineform.component';
import { EditvaccinedataComponent } from './editvaccinedata/editvaccinedata.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'record', component:RecordsComponent},
  {path:'dataentry', component:DataentryComponent},
  {path:'edit/:id', component:EditComponent},
  {path: 'info', component:InfoComponent},
  {path: 'vaccineform', component:VaccineformComponent},
  {path: 'editvaccinedata/:id', component:EditvaccinedataComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
