import { NgModule } from '@angular/core';
import { IncidentRepository} from './incident.repository';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from'./rest.datasource';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms'
import { AuthService } from './auth.service';

@NgModule({
  imports: [HttpClientModule, ReactiveFormsModule],
  providers: [IncidentRepository, StaticDataSource, //added RestDataSource and show the form for adding incident 
    {provide: StaticDataSource, useClass: RestDataSource},
    RestDataSource, AuthService]
})
export class ModelModule {}
