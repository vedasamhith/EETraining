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
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogContentExampleDialogComponent } from 'src/Dialogbox/comp/dialog-content-example-dialog.component';
import { provideHttpClient } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DialogContentExampleDialogComponent
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
    MatCardModule,
    MatTableModule,
    MatMenuModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    CdkAccordionModule,
    MatDialogModule,
    MatSelectModule,
    ToastrModule.forRoot()
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
