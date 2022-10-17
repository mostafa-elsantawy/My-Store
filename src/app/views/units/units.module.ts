import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsRoutingModule } from './units-routing.module';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { EditUnitComponent } from './edit-unit/edit-unit.component';
import { UnitListComponent } from './unit-list/unit-list.component';


@NgModule({
  declarations: [
    AddUnitComponent,
    EditUnitComponent,
    UnitListComponent
  ],
  imports: [
    CommonModule,
    UnitsRoutingModule
  ]
})
export class UnitsModule { }
