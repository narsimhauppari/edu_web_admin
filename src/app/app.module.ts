import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import {ToastModule} from 'primeng/toast'

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';

import { SharedService } from './services/shared.service';
import { CarService } from './services/car.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    ToastrModule.forRoot({
      preventDuplicates : true
    }),
    TieredMenuModule,
    TableModule,
    SliderModule,
    DropdownModule,
    MultiSelectModule,
    DialogModule,
    ToastModule,
    HttpClientModule
  ],
  providers: [SharedService, CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
