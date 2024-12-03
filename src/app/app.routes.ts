import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LlamaComponent } from './llama/llama.component';

NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
      CommonModule,
      CrudComponent
    ],
    bootstrap: [AppComponent]
  })

export const routes: Routes = [
    { path: '', redirectTo: '/llama', pathMatch: 'full' },
    { path: 'llama', component: LlamaComponent },
    { path: 'crud', component: CrudComponent }
    
];
