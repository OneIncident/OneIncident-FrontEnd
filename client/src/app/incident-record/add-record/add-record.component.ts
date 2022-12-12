import { compileDeclareInjectableFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestDataSource } from '../../model/rest.datasource';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  constructor(private incidents: RestDataSource) { }

  addIncident = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    status: new FormControl(''),
    location: new FormControl(''),
    description: new FormControl(''),
    priority: new FormControl('')
  });

  message: boolean = false;

  ngOnInit(): void {
    
  }

  SaveData() {
    //console.log(this.addIncident.value);
    this.incidents.saveIncidentData(this.addIncident.value).subscribe((result) => {
       //console.log(result);
       this.message = true;
       this.addIncident.reset({});
    });
  }

  removeMessage() {
    this.message = false;
  }
}
