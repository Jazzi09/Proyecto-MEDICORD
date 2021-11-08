import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { events } from '@syncfusion/ej2-calendars';
import { Paciente } from 'src/app/interfaces/paciente'
import { PacienteService } from 'src/app/services/paciente.service';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { PatientComponent } from './patient/patient.component';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  listData: Paciente[] =[];
  searchKey: string = " ";
  displayedColumns: string[] = ['name', 'lastname', 'email', 'number', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public pacienteService: PacienteService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.listData = this.pacienteService.getPaciente();
    this.dataSource = new MatTableDataSource(this.listData)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    this.searchKey = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    const dialogRef = this.dialog.open(PatientComponent, {
      width: "80%",
      height: "90%",
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Lista de pacientes')
    })
  }
}
