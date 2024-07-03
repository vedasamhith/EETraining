import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockToastrService } from '../service/MocktoastrService';
import { MockUserService } from '../service/MockUserService';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';

import { SearchComponent, UserData } from './search.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ToastrModule } from 'ngx-toastr';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { of, throwError } from 'rxjs'

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let userService: UserService;
  let toastrService: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, BrowserAnimationsModule, MatDialogModule, MatToolbarModule, HttpClientModule, CdkAccordionModule,
        BrowserDynamicTestingModule, ToastrModule.forRoot({
          positionClass: 'toast-bottom-right'
        })],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SearchComponent],
      providers: [
        { provide: UserService, useClass: MockUserService },
        { provide: ToastrService, UseClass: MockToastrService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve userdata', () => {
    component.GetUserData();
    expect(component.dataSource.length).toBeGreaterThan(0);
  });

  it('should add userdata', () => {
    let userdata: UserData = {
      user_id: 0,
      user_name: 'user1',
      first_name: 'firstname1',
      last_name: 'lastname1',
      emailId: '1@email.com',
      user_status: 'A',
      department: 'department1'
    };
    component.addRowData(userdata);
    expect(component.dataSource.length).toBe(2);
  });

  it('should update userdata', () => {
    let userdata: UserData = {
      user_id: 1,
      user_name: 'user1',
      first_name: 'firstname1',
      last_name: 'lastname1',
      emailId: '1@email.com',
      user_status: 'A',
      department: 'department1'
    };
    component.updateRowData(userdata);
    expect(component.dataSource.length).toBe(2);
  });

  it('should delete userdata', () => {
    let userdata: UserData = {
      user_id: 1,
      user_name: 'user1',
      first_name: 'firstname1',
      last_name: 'lastname1',
      emailId: '1@email.com',
      user_status: 'A',
      department: 'department1'
    };
    component.deleteRowData(userdata);
    expect(component.dataSource.length).toBe(2);
  });

  // it('should add userdata Error Scenario', () => {

  //   let userdata: UserData = {
  //     user_id: 0,
  //     user_name: 'user1',
  //     first_name: 'firstname1',
  //     last_name: 'lastname1',
  //     emailId: '1@email.com',
  //     user_status: 'A',
  //     department: 'department1'
  //   };
    
  //   spyOn(toastrService, 'error').and.callThrough();
  //   spyOn(userService, 'CreateUser').and.callFake(() => throwError(() => of( { error: { message: 'Bad Request' } })));

  //   component.addRowData(userdata);
  //   expect(component).toBeTruthy();
  // });

});
