import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Paciente } from '../interfaces/paciente';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  formOne: FormGroup;
  formTwo: FormGroup;
  formThree: FormGroup;
  formFour: FormGroup;
  formFive: FormGroup;


  public paciente$ = new Subject<any>();

  constructor(
    public fb: FormBuilder,
    public firebase: AngularFirestore,
  ) {

    this.formOne = this.fb.group({
      nombre: ['', Validators.required],
      nss: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      sexo: ['', ],
      edad: ['', Validators.required],
      consultorio: ['', ],
      turno: ['', ],
      correo: ['', ],
      telefono: ['', Validators.required],
      ocupacion: ['', ],
      motivo: ['', ]
    })

    this.formTwo = this.fb.group({
      medicam: ['', ],
      especif: ['', ],
      otros: ['', ],
      alcohol: ['', ],
      tabaquismo: ['', ],
      drogas: ['', ],
      inmun: ['', ],
      otros2: ['', ],
      especif2: ['', ],
      menarq: ['', ],
      ritmo: ['', ],
      fum: ['', ],
      g: ['', ],
      p: ['', ],
      a: ['', ],
      c: ['', ],
      ivsa: ['', ],
      cuales: ['', ]
    })

    this.formThree = this.fb.group({
      peea: ['', ],
      ipas: ['', ]
    })

    this.formFour = this.fb.group({
      ta: ['', ],
      fc: ['', ],
      fr: ['', ],
      temp: ['', ],
      peso: ['', ],
      talla: ['', ],
      imc: ['', ],
      aspecto: ['', ],
      cabeza: ['', ],
      torax: ['', ],
      abdomen: ['', ],
      extrem: ['', ],
      neuro: ['', ],
      lab: ['', ],
      imagen: ['', ],
      otros: ['', ],
    })

    this.formFive = this.fb.group({
      diagnostico: ['', ],
      tratamiento: ['', ]
    })
  }

  initializeFormGroup() {
    this.formOne.setValue({
      nombre: '',
      nss: '',
      sexo: '',
      edad: '',
      consultorio: '',
      turno: '',
      correo: '',
      telefono: '',
      ocupacion: '',
      motivo: '',
    });
    this.formTwo.setValue({
      medicam: '',
      especif: '',
      otros: '',
      alcohol: '',
      tabaquismo: '',
      drogas: '',
      inmun: '',
      otros2: '',
      especif2: '',
      menarq: '',
      ritmo: '',
      fum: '',
      g: '',
      p: '',
      a: '',
      c: '',
      ivsa: '',
      cuales: '',
    });
    this.formThree.setValue({
      peea: '',
      ipas: '',
    });
    this.formFour.setValue({
      ta: '',
      fc: '',
      fr: '',
      temp: '',
      peso: '',
      talla: '',
      imc: '',
      aspecto: '',
      cabeza: '',
      torax: '',
      abdomen: '',
      extrem: '',
      neuro: '',
      lab: '',
      imagen: '',
      otros: '',
    });
    this.formFive.setValue({
      diagnostico: '',
      tratamiento: '',
    });
  }

  getPaciente(): Observable<any> {
    return this.firebase.collection('pacientes').snapshotChanges();
  }

  allPacientes(){
    this.firebase.collection('pacientes');
  }

  addPaciente(paciente: Paciente): Promise<any> {
    return this.firebase.collection('pacientes').add(paciente)
    
  }

  createPaciente() {
    const paciente: Paciente = {
      nombre: this.formOne.value.nombre,
      nss: this.formOne.value.nss,
      sexo: this.formOne.value.sexo,
      edad: this.formOne.value.edad,
      consultorio: this.formOne.value.consultorio,
      turno: this.formOne.value.turno,
      correo: this.formOne.value.correo,
      telefono: this.formOne.value.telefono,
      ocupacion: this.formOne.value.ocupacion,
      motivo: this.formOne.value.motivo,
      medicam: this.formTwo.value.medicam,
      especif: this.formTwo.value.especif,
      otros: this.formTwo.value.otros,
      alcohol: this.formTwo.value.alcohol,
      tabaquismo: this.formTwo.value.tabaquismo,
      drogas: this.formTwo.value.drogas,
      inmun: this.formTwo.value.inmun,
      otros2: this.formTwo.value.otros2,
      especif2: this.formTwo.value.especif2,
      menarq: this.formTwo.value.menarq,
      ritmo: this.formTwo.value.ritmo,
      fum: this.formTwo.value.fum,
      g: this.formTwo.value.g,
      p: this.formTwo.value.p,
      a: this.formTwo.value.a,
      c: this.formTwo.value.c,
      ivsa: this.formTwo.value.ivsa,
      cuales: this.formTwo.value.cuales,
      peea: this.formThree.value.peea,
      ipas: this.formThree.value.ipas,
      ta: this.formFour.value.ta,
      fc: this.formFour.value.fc,
      fr: this.formFour.value.fr,
      temp: this.formFour.value.temp,
      peso: this.formFour.value.peso,
      talla: this.formFour.value.talla,
      imc: this.formFour.value.imc,
      aspecto: this.formFour.value.aspecto,
      cabeza: this.formFour.value.cabeza,
      torax: this.formFour.value.torax,
      abdomen: this.formFour.value.abdomen,
      extrem: this.formFour.value.extrem,
      neuro: this.formFour.value.neuro,
      lab: this.formFour.value.lab,
      imagen: this.formFour.value.imagen,
      otros3: this.formFour.value.otros,
      diagnostico: this.formFive.value.diagnostico,
      tratamiento: this.formFive.value.tratamiento,
    }

    this.addPaciente(paciente).then(() => {
      console.log('paciente registrado');
    }, error => {
      console.log(error);
    })
  }

  deletePaciente(id: string): Promise<any> {
    return this.firebase.collection('pacientes').doc(id).delete();
  }

  addPacienteEdit(paciente: Paciente) {
    this.paciente$.next(paciente);
  }

  getPacienteEdit(): Observable<Paciente> {
    return this.paciente$.asObservable();
  }


  //ESTO ES LO Q  CREO Q NO SIRVE
  editPaciente(paciente: Paciente) {
    this.formOne.setValue(_.omit(paciente, 'id'));
    this.formTwo.setValue(_.omitBy(paciente, _.isEmpty));
    this.formThree.setValue(_.omitBy(paciente, _.isEmpty));
    this.formFour.setValue(_.omitBy(paciente, _.isEmpty));
    this.formFive.setValue(_.omitBy(paciente, _.isEmpty));
  }
}
