import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Paciente } from 'src/app/interfaces/paciente';
import { NotificationService } from 'src/app/services/notification.service';
import { PacienteService } from 'src/app/services/paciente.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  form = FormGroup;
  titulo = "Nuevo Historial Clínico";

  constructor(
    public service: PacienteService,
    public notificationService: NotificationService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.service.getPacienteEdit().subscribe(data => {
      this.titulo = "Modificar Historial Clínico";

      })
    }

  onSubmit() {
    if (this.service.formOne.valid) {
      this.service.createPaciente()}
      this.service.formOne.reset();
      this.service.formTwo.reset();
      this.service.formThree.reset();
      this.service.formFour.reset();
      this.service.formFive.reset();
      this.service.initializeFormGroup();
      this.notificationService.success('¡Historial guardado con éxito!')
      this.onClose();
  }

  onClose() {
    this.service.formOne.reset(),
    this.service.formTwo.reset(),
    this.service.formThree.reset(),
    this.service.formFour.reset(),
    this.service.formFive.reset(),
    this.dialog.closeAll();
  }
}