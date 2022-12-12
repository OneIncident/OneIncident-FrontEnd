import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { IncidentRecordComponent } from '../incident-record/incident-record.component';
import { CounterDirective } from './counter.directive';
import { AddRecordComponent } from './add-record/add-record.component';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule, ReactiveFormsModule],
  declarations: [IncidentRecordComponent, CounterDirective, 
    AddRecordComponent, 
    EditRecordComponent
  ],
  exports: [IncidentRecordComponent, CounterDirective,
    AddRecordComponent,
    EditRecordComponent
  ]
})
export class IncidentRecordModule {}