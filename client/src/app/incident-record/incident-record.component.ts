import { Component , OnInit} from '@angular/core';
import { Incident } from '../model/incident.model';
import { IncidentRepository } from './../model/incident.repository';
import { RestDataSource } from '../model/rest.datasource';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incident-record',
  templateUrl: './incident-record.component.html',
  styleUrls: ['./incident-record.component.css']
})
export class IncidentRecordComponent implements OnInit
{

  constructor(private repository: IncidentRepository, 
              private dataSource: RestDataSource,
              private router: Router) {}
  
  public selectedStatus = null;
  public incidentsPerPage = 5;
  public selectedPage = 1;
  
  //create variable & function for list
  incidentData: any=[];
  
  ngOnInit(): void {
    this.dataSource.getAllIncident().subscribe((allData) => {
      console.log(allData);
      this.incidentData = allData;
    })
  }

get incidents(): Incident[] 
{
  const pageIndex = (this.selectedPage - 1) * this.incidentsPerPage;
  return this.repository.getIncidents(this.selectedStatus)
  .slice(pageIndex, pageIndex + this.incidentsPerPage);
}

get statuss(): string[] 
{
return this.repository.getStatus();
}

changeStatus(newStatus?: string): void 
{
this.selectedStatus = newStatus;
}

changePage(newPage: number): void
{
  this.selectedPage = newPage;
}

changePageSize(newSize: number): void
{
  this.incidentsPerPage = Number(newSize);
  this.changePage(1);
}

get pageCount(): number
{
  return Math.ceil(this.repository
    .getIncidents(this.selectedStatus).length / this.incidentsPerPage);
}

deleteIncident(incident_id: any) {
  //console.log(incident_id);
  this.dataSource.deleteIncident(incident_id).subscribe((result)=> {
    //console.log(result);
    this.ngOnInit();
  });
}
}
