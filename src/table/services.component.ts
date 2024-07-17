import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { DialogContentExampleDialogComponent } from '../dialog-content-example-dialog/dialog-content-example-dialog.component';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  displayedColumns: string[] = ['csiId', 'projectName', 'serviceName', 'points', 'status', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile = false;
  isCollapsed = false;
  selection: any;


  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  constructor(private observer: BreakpointObserver) {
    const initialSelection : Services[] = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<Services>(allowMultiSelect, initialSelection);

  }

  ngOnInit() {
    this.isMobile = false;
    this.sidenav.open();
    this.isCollapsed = false;
  }

  toggleMenu() {
    if (this.isMobile) {
      this.sidenav.toggle();
      this.isCollapsed = false;
    } else {
      this.sidenav.open();
      this.isCollapsed = !this.isCollapsed;
    }
  }

  openPopup() {

  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}

export interface Services {
  csiId: number;
  projectName: string;
  serviceName: string;
  points: number,
  status: string;
}

const ELEMENT_DATA: Services[] = [
  { csiId: 157189, projectName: 'Icg architecture - cct citi c', serviceName: 'ccrapp_ind', points: 10, status: 'Not Archeived' },
  { csiId: 157189, projectName: 'Icg architecture - cct citi c', serviceName: 'dataapps_infra', points: 10, status: 'Not Archeived' },
  { csiId: 157189, projectName: 'Icg architecture - cct citi c', serviceName: 'ccrapps', points: 10, status: 'Not Archeived' }
];
