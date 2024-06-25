import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardExampleComponent } from './mat-card-example/mat-card-example.component';
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MatCardExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatCardModule,
    MatTableModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
