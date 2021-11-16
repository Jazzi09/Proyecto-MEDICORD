import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Paciente } from 'src/app/interfaces/paciente'
import { PacienteService } from 'src/app/services/paciente.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { PatientComponent } from './patient/patient.component';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  constructor(
    public pacienteService: PacienteService,
    public dialog: MatDialog,
    public notificationService: NotificationService
  ) { }

  listData: Paciente[]= [];
  searchKey: any;
  displayedColumns: string[] = ['nombre', 'edad', 'correo', 'telefono', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.getData();
    this.pacienteService.getPacienteEdit().subscribe(data => {
      console.log(data);
    })
  }

  getData() {
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

  onDelete(id: string) {
    this.pacienteService.deletePaciente(id).then(() => {
      this.notificationService.warn('Historial eliminado')
    }, error => {
      console.log(error);
    })
  }


  //FUNCION FEA Q NO SIRVE
  onEdit(paciente: Paciente) {
    console.log(paciente)
    this.pacienteService.editPaciente(paciente);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(PatientComponent, dialogConfig)
    
    //const editdialog = this.dialog.open(PatientComponent);
    //this.pacienteService.editPaciente(paciente)
  }

}
