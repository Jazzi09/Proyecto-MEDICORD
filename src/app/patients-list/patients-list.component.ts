import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MedicoService } from "../servicios/medico.service";

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  constructor(public service: MedicoService,
    public dialog: MatDialog,
    public table: MatTableDataSource<any>,
    public sort: MatSort,
    public paginator: MatPaginator,
    public dialogcongif: MatDialogConfig) { }

  listData: MatTableDataSource<any> | any;
  displayedColumns: string[] = ['name', 'age', 'direction', 'cellphone', 'ig' ];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
