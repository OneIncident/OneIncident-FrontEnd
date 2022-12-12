import { Injectable } from "@angular/core";
import { Incident } from './incident.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource
{
  private incidents: Incident[] =
  [
    new Incident(1,'Name 1', 'Date 1', 'Status 1', 'Location 1' , 1, 'Description 1'),
    new Incident(2, 'Name 2', 'Date 2', 'Status 1', 'Location 2' , 1, 'Description 2'),
    new Incident(3, 'Name 3', 'Date 3', 'Status 1', 'Location 3' , 1, 'Description 3'),
    new Incident(4, 'Name 4', 'Date 4', 'Status 1', 'Location 4' , 1, 'Description 4'),
    new Incident(5, 'Name 5', 'Date 5', 'Status 2', 'Location 5' , 1, 'Description 5'),
    new Incident(6, 'Name 6', 'Date 6', 'Status 2', 'Location 6' , 1, 'Description 6'),
    new Incident(7, 'Name 7', 'Date 7', 'Status 2', 'Location 7' , 1, 'Description 7'),
    new Incident(8, 'Name 8', 'Date 8', 'Status 2', 'Location 8' , 1, 'Description 8'),
    new Incident(9, 'Name 9', 'Date 9', 'Status 2', 'Location 9' , 1, 'Description 9'),
    new Incident(10, 'Name 10', 'Date 10', 'Status 3', 'Location 10' , 1, 'Description 10'),
    new Incident(11, 'Name 11', 'Date 11', 'Status 3', 'Location 11' , 1, 'Description 11'),
    new Incident(12, 'Name 12', 'Date 12', 'Status 4', 'Location 12' , 1, 'Description 12'),
    new Incident(13, 'Name 13', 'Date 13', 'Status 4', 'Location 13' , 1, 'Description 13'),
    new Incident(14, 'Name 14', 'Date 14', 'Status 4', 'Location 14' , 1, 'Description 14'),
    new Incident(15, 'Name 15', 'Date 15', 'Status 4', 'Location 15' , 1, 'Description 15'),
  ];

  getIncidents(): Observable<Incident[]>
  {
    return from([this.incidents]);
  }
}