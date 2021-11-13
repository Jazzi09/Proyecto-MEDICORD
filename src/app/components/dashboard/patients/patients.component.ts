import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

  

  constructor(
    public pacienteService: PacienteService,
    public dialog: MatDialog,
  ) { }

  listData: Paciente[]= [];
  searchKey: any;
  displayedColumns: string[] = ['nombre', 'edad', 'correo', 'telefono', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.pacienteService.getPaciente().subscribe(doc => {
      this.listData = [];
      doc.forEach((element: any) => {
        this.listData.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      })
    })
  }

  applyFilter() {
    if (this.searchKey == "") {
      this.ngOnInit();
    } else {
      this.listData = this.listData.filter(res => {
        return res.nombre.toLowerCase().match(this.searchKey.toLowerCase());
      })
    }
  }

  onCreate() {
    const dialogRef = this.dialog.open(PatientComponent, {
      width: "100%",
      height: "90%",
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('')
    })
  }

}
