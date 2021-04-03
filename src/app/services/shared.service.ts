import { Injectable } from '@angular/core';
import { customerList } from "../data/data";
import { Customer } from "../model/Customer";

@Injectable()
export class SharedService {

  viewCustomerId: number;
  customer: Customer;
  customerList: Customer[] = customerList;

  constructor() {}

  getAllCustomers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { res: this.customerList };
        resolve(data);
      }, 2000);
    });
  }

  getCustomerByGivenId(id) {
    this.customer = this.customerList.find(cus => cus._id === id);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.customer);
      }, 2000);
    });
  }
}