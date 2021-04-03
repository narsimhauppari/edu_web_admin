import { Component, OnInit } from '@angular/core';
import { Customer } from "src/app/model/customer";
import { Router } from "@angular/router";
import { SharedService } from "./../../services/shared.service";
import { CarService } from "./../../services/car.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  
})
export class ListComponent implements OnInit {

  customerList: Customer[] = [];
  cols: any[];
  brands: any[];
  colors: any[];
  cars: any[];

  yearFilter: number;
  yearTimeout: any;
  isModalVisible = false

  constructor(
    private sharedService: SharedService,
    private carService: CarService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.carService.getCarsMedium().then(cars => this.cars = cars);
    this.brands = [
      { label: 'All Brands', value: null },
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
  ];

  this.colors = [
      { label: 'White', value: 'White' },
      { label: 'Green', value: 'Green' },
      { label: 'Silver', value: 'Silver' },
      { label: 'Black', value: 'Black' },
      { label: 'Red', value: 'Red' },
      { label: 'Maroon', value: 'Maroon' },
      { label: 'Brown', value: 'Brown' },
      { label: 'Orange', value: 'Orange' },
      { label: 'Blue', value: 'Blue' }
  ];

  this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' },
      { field: 'action', header: 'Actions' }
  ];


    const promise = this.sharedService.getAllCustomers();
    promise.then(
      response => {
        this.customerList = response["res"];
      },
      error => {
        console.log("error " + error);
      }
    );
  }

  onYearChange(event, dt) {
    if (this.yearTimeout) {
        clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
        dt.filter(event.value, 'year', 'gt');
    }, 250);
  }

  deleteCustomer(id) {
    this.isModalVisible = true;
    console.log("delete customer " + id);
  }

  updateCustomer(id) {
    this.router.navigate(["/edit", id]);
  }

}
