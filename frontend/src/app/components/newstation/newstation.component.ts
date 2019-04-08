import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {StationService} from "../../services/station.service";
import {Stations} from "../../models/stations";


@Component({
  selector: 'app-newstation',
  templateUrl: './newstation.component.html',
  styleUrls: ['./newstation.component.css']
})
export class NewstationComponent implements OnInit {

  newstationForm: FormGroup;

  validation_messages: any;

  constructor(private newstationService: StationService,
              private router: Router, private formBuilder: FormBuilder) {

    this.newstationForm = this.formBuilder.group({
        name: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/.{1,20}$/)])),
      }
    )
  }

  ngOnInit() {
    this.validation_messages = {
      'name': [
        { type: 'required', message: 'Name is required'},
        { type: 'pattern', message: 'It has to be between 1 and 20 characters long'}
      ]
    }
  }

  addStation() {
    console.log(this.newstationForm.value);
    let station = new Stations();
    station._id = "";
    station.name = this.newstationForm.value.name;
    station.bikes = "";

    this.newstationService.addStation(station)
      .subscribe(
        res => {
          console.log(res);
          let token = res['token'];
          localStorage.setItem('token', token);

          this.router.navigateByUrl("");
        },

        err => {
          console.log(err);
          this.handleError(err);
        });

  }

  private handleError(err: HttpErrorResponse) {
    if( err.status == 500 ) {
      alert(err);
    } else if ( err.status == 404 ) {
      alert('404 not found');
    }

  }

}
