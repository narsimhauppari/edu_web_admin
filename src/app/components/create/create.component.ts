import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../../services/shared.service";
import { CarService } from "./../../services//car.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [MessageService]
})
export class CreateComponent implements OnInit {

  createCustomerForm: FormGroup;
  isAddNewCar = 'Add Car'

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private sharedService: SharedService,
    private carService: CarService,
    private route: ActivatedRoute
  ) {
    this.createCustomerForm = formBuilder.group({
      brand: ["", Validators.required],
      color: [""],
      year: ["", Validators.required],
      price : ["", Validators.required],
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      const empId = params.get('id')
      if(empId) {
        this.isAddNewCar = 'Edit Car'
        this.getCustomer(empId)
      }
    })
  }

  getCustomer(id) {
    this.carService.getCarByGivenId(id).subscribe(
      car => this.editEmployee(car)
    )
  }

  editEmployee(car) {
    this.createCustomerForm.patchValue({
      brand: car.brand,
      color: car.color,
      year: car.year,
      price : car.price,
    })
  }

  createCustomer() {
    console.log("create button clicked");
    console.log("form value " + JSON.stringify(this.createCustomerForm.value));

    if (this.createCustomerForm.valid) {
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
    } else {
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
    }
  }

}
