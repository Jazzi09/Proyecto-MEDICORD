import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  hide = true

  constructor(
    public fb: FormBuilder,
    public _snackBar: MatSnackBar,
    public router: Router
    ) {
    this.form = this.fb.group({
      usuario: ["", Validators.required],
      contraseña: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar() {
    const usuario = this.form.value.usuario;
    const contraseña = this.form.value.contraseña;

    if (usuario == "usuario04" && contraseña == "contraseña") {
      this.loading();
    } else {
      this.error();
      this.form.reset();
    }

  }

  error() {
    this._snackBar.open("Usuario o contraseña incorrecto", "Error", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  loading() {
    this.router.navigate(["dashboard"]);
  }
  
}
