import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})

export class MedicoService {

  constructor( public firebase: AngularFireDatabase) { }

  patientsList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    career: new FormControl(0, Validators.required),
    careerFocus: new FormControl(''),
    agreement: new FormControl(0, Validators.required),
    curriculum: new FormControl('', Validators.required),
    webpage: new FormControl('', Validators.required)
  });

}

