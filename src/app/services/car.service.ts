import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, find, first, tap, map, flatMap } from 'rxjs/operators'

import { Car } from '../model/car';

@Injectable()
export class CarService {
    cars: any[]
    constructor(private http: HttpClient) { }

    getCarsMedium() {
        return this.http.get<any>('assets/car-data/car-data.json')
        .toPromise()
        .then(res => <Car[]>res.data)
        .then(data => { return data; });
    }

    getCarByGivenId(id) {
        console.log('id', id)
        return this.http.get<any>("assets/car-data/car-data.json").pipe(
            flatMap(response => response.data),
            filter( data => data['vin'] === id)
        )
    }
}