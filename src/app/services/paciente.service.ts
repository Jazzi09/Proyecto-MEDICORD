import { Injectable } from '@angular/core';
import { Paciente } from '../interfaces/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  listData: Paciente[] = [
    { name: "Aarón", lastname: "Arredondo", email: "aaronarar@gmail.com", number: "8119845476"},
    { name: "Jacky", lastname: "Avila", email: "jackyavila@gmail.com", number: "8343090559"},
    { name: "Lucy", lastname: "Blanco", email: "zulairam@gmail.com", number: "8341187110"},
    { name: "Efraín", lastname: "Avila", email: "efrain@gmail.com", number: "8341892413"},
    { name: "Abdiel", lastname: "Avila", email: "abdiel@gmail.com", number: "8114651289"},
    { name: "Mayo", lastname: "Nesa", email: "lamaya@gmail.com", number: "8348791597"},
    { name: "Ara", lastname: "Bella", email: "arita@gmail.com", number: "8341543624"},
  ]

  constructor() { }

  getPaciente() {
    return this.listData.slice();
  }
}
