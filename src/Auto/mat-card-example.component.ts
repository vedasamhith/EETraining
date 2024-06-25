import { Component } from '@angular/core';

@Component({
  selector: 'app-mat-card-example',
  templateUrl: './mat-card-example.component.html',
  styleUrls: ['./mat-card-example.component.scss']
})
export class MatCardExampleComponent {
  displayedColumns: string[] = ['enablerId', 'enabler', 'points','tech tree', 'status', 'details'];
  dataSource = ELEMENT_DATA;
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
  {enablerId: 50001, enabler: 'Static Code Analysis', points: '1510/1510', status: 'Archeived'},
  {enablerId: 50002, enabler: 'Project On SonarQube', points: '870/1510', status: 'In Progress'},
  {enablerId: 50003, enabler: 'Project On .Net Core', points: '1000/1510', status: 'Completed'}
];