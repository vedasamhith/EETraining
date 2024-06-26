import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { DialogContentExampleDialogComponent } from '../dialog-content-example-dialog/dialog-content-example-dialog.component';


@Component({
  selector: 'app-mat-card-example',
  templateUrl: './mat-card-example.component.html',
  styleUrls: ['./mat-card-example.component.scss']
})
export class MatCardExampleComponent {
  displayedColumns: string[] = ['enablerId', 'enabler', 'points', 'tech tree', 'status', 'details'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= false;
  isCollapsed = false;

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  constructor(private observer: BreakpointObserver) {}

  ngOnInit() {
    this.isMobile = false;
    this.sidenav.open();
    this.isCollapsed = false;
  }

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false;
    } else {
      this.sidenav.open();
      this.isCollapsed = !this.isCollapsed;
    }
  }

  openPopup(){

  }

}


export interface PeriodicElement {
  enabler: string;
  enablerId: number;
  points: string;
  //techTree : string;
  status: string;
  //details: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { enablerId: 50001, enabler: 'Static Code Analysis', points: '1510/1510', status: 'Archeived' },
  { enablerId: 50002, enabler: 'Project On SonarQube', points: '870/1510', status: 'In Progress' },
  { enablerId: 50003, enabler: 'Project On .Net Core', points: '1000/1510', status: 'Completed' }
];