import { Injectable } from '@angular/core';
import { Incident } from './incident.model';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';


@Injectable()
export class IncidentRepository
{
  private incidents: Incident[] = [];
  private statuss: string[] = [];

  constructor(private dataSource: RestDataSource)
  { 
    //send the data to the subscriber of specific status 
    dataSource.getIncidents().subscribe(data => {
      this.incidents = data;
      this.statuss = data.map(i => i.status)
        .filter((s, index, array) => array.indexOf(s) === index).sort();
    });
  }

  getIncidents(status: string = null): Incident[]
  {
    return this.incidents
      .filter(i => status == null || status === i.status);
  }

  getIncident(id: number): Incident
  {
    return this.incidents.find(i => i._id === id);
  }

  getStatus(): string[]
  {
    return this.statuss;
  }

  saveIncident (incident: Incident): Observable<Incident>
  {
    return this.dataSource.saveIncidentData(incident);
  }
}
