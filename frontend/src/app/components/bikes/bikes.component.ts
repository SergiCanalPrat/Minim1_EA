import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { Bikes } from "../../models/bikes"
import { BikesService } from "../../services/bikes.service"

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  crearForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private BikesService: BikesService) { 
    this.crearForm = this.formBuilder.group({
      name: new FormControl(),
      kms: new FormControl(),
      description: new FormControl(),
    })
  }

  ngOnInit() {
    
  }

  addBike() {
    //funcion para añadir un bike
   /* console.log("añadir usuario  " + this.crearForm.value);
    let bike = new Bikes(this.crearForm.value.name, this.crearForm.value.kms, this.crearForm.value.home, this.crearForm.value.movil);
    this.BikesService.add(bike)
      .subscribe( res => {
        if (res == 200){
          console.log("Anadido correctamente");
        }
        else {
          console.log ("Error");
        }
      }

      )*/
  }
}
