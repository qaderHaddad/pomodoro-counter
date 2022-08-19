import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page.component';
import { CounterModule } from 'src/app/components/counter/counter.module';
import { MainPageRoutingModule } from './main-page-routing.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CounterModule,
    MainPageRoutingModule
  ],
  exports: [MainPageComponent],
})
export class MainPageModule {}
