
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
 exports: [
   MatNativeDateModule,
   MatButtonModule,
   MatCheckboxModule,
   MatFormFieldModule,
   MatDatepickerModule,
   MatInputModule,
   MatRadioModule,
   MatSelectModule,
   MatTabsModule,
   MatToolbarModule,
 ]
})
export class MaterialModule {}