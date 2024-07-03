import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserData } from 'src/app/search/search.component';

interface user_status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.component.html',
  styleUrls: ['./dialog-content-example-dialog.component.scss']
})
export class DialogContentExampleDialogComponent implements OnInit {
  action: string;
  local_data: any;

  userstatus: user_status[] = [
    {value: 'I', viewValue: 'Inactive'},
    {value: 'A', viewValue: 'Acive'},
    {value: 'T', viewValue: 'Terminated'},
  ];

  myForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogContentExampleDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UserData, private toastr : ToastrService) {
    console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  ngOnInit(){
    // this.myForm = new FormGroup({
    //   user_name: new FormControl('', [Validators.required]),
    //   first_name: new FormControl('', [Validators.required]),
    //   last_name: new FormControl('', [Validators.required]),
    //   email: new FormControl('', [Validators.required]),
    //   user_status: new FormControl('', [Validators.required]),
    //   department: new FormControl('', [Validators.required]),
      
    // });
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
