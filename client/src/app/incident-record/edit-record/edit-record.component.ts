import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestDataSource } from '../../model/rest.datasource';
import { ActivatedRoute } from'@angular/router';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit{

  constructor(private incidents: RestDataSource, private router: ActivatedRoute) { }

  editIncident = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    status: new FormControl(''),
    location: new FormControl(''),
    description: new FormControl(''),
    priority: new FormControl('')
  });

  message: boolean = false;

  ngOnInit(): void {
    //console.log(this.router.snapshot.params.id);
    this.incidents.getIncidentById(this.router.snapshot.params.id).subscribe((result: any)=>{
      //console.log(result);
      this.editIncident = new FormGroup({
        name: new FormControl(result['name']),
        date: new FormControl(result['date']),
        status: new FormControl(result['status']),
        location: new FormControl(result['location']),
        description: new FormControl(result['description']),
        priority: new FormControl(result['priority'])
    });
  });
}

  UpdateData() {
    //console.log(this.editIncident.value);
    this.incidents.updateIncidentData(this.router.snapshot.params.id, this.editIncident.value).subscribe((result)=>{
      //console.log(result);
      this.message = true;
    });
  }

  removeMessage() {
    this.message = false;
  }

  
}
