import { FormControl } from '@angular/forms';

import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, pipe } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatTable } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { DialogContentExampleDialogComponent } from 'src/Dialogbox/comp/dialog-content-example-dialog.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  displayedColumns: string[] = ['user_name', 'first_name', 'last_name', 'email', 'user_status', 'department', 'update', 'delete'];
  dataSource: UserData[] = [];
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile = false;
  isCollapsed = false;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  readonly dialog = inject(MatDialog);
  openDialog(action: any, obj: any) {
    obj.action = action;

    if (action === 'Update') {
      if (obj.user_status === 'Inactive')
        obj.user_status = 'I'
      if (obj.user_status === 'Active')
        obj.user_status = 'A'
      if (obj.user_status === 'Terminated')
        obj.user_status = 'T'
    }

    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent, {
      width: '700px',
      height: '400px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      } else if (result.event == 'Cancel') {
        this.GetUserData();
      }

    });
  }

  constructor(private observer: BreakpointObserver, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.isMobile = false;
    this.isCollapsed = false;
    this.GetUserData();
  }

  GetUserData() {
    this.userService.getAllUsers().subscribe({
      next: value => {

        value.forEach(data => {
          if (data.user_status === 'I')
            data.user_status = 'Inactive'
          if (data.user_status === 'A')
            data.user_status = 'Active'
          if (data.user_status === 'T')
            data.user_status = 'Terminated'
        })

        this.dataSource = value
      },
      error: err => {
        this.toastr.error(err.message, '', {
          positionClass: 'toast-bottom-right'
        });
      },
      complete: () => {
        this.toastr.success('User Data loaded successfully', '', {
          positionClass: 'toast-bottom-right'
        });
        console.log('All Users Data loaded')
      }
    });
  }

  toggleMenu() {
    if (this.isMobile) {
      this.isCollapsed = false;
    } else {
      this.isCollapsed = !this.isCollapsed;
    }
  }
  openPopup() {
  }

  addRowData(row_obj: UserData) {
    console.log(row_obj);
    row_obj.user_id = 0;
    this.userService.CreateUser(row_obj).subscribe({
      next: value => console.log(value),
      error: err => {
        this.toastr.error(err.error.message, '', {
          positionClass: 'toast-bottom-right'
        });
      },
      complete: () => {
        this.toastr.success('User Data Saved successfully', '', {
          positionClass: 'toast-bottom-right'
        });
        this.GetUserData();
      }
    });
  }


  updateRowData(row_obj: UserData) {
    console.log(row_obj);

    this.userService.UpdateUser(row_obj).subscribe({
      next: value => console.log(value),
      error: err => {
        this.toastr.error(err.error.message, '', {
          positionClass: 'toast-bottom-right'
        });
      },
      complete: () => {
        this.toastr.success('User Data Updated successfully', '', {
          positionClass: 'toast-bottom-right'
        });
        this.GetUserData();
      }
    });

  }

  deleteRowData(row_obj: UserData) {
    console.log(row_obj);

    this.userService.DeleteUser(row_obj.user_id).subscribe({
      next: value => console.log(value),
      error: err => {
        this.toastr.error(err.error.message, '', {
          positionClass: 'toast-bottom-right'
        });
      },
      complete: () => {
        this.toastr.success('User Data Deleted successfully', '', {
          positionClass: 'toast-bottom-right'
        });
        this.GetUserData();
      }
    });

  }

}

export interface UserData {
  user_name: string;
  first_name: string;
  last_name: string;
  emailId: string;
  user_status: string;
  department: string;
  user_id: number;
}

