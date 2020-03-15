import { NgModule } from '@angular/core';
import { MatBadgeModule, MatIconModule, MatInputModule, MatCheckboxModule } from '@angular/material';


const matComponents = [
  MatBadgeModule,
  MatIconModule,
  MatInputModule,
  MatCheckboxModule
]

@NgModule({
  imports: [matComponents],
  exports: [matComponents]
})
export class MaterialModule { }

