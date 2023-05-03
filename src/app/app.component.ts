import { Component, OnInit,ViewChild} from '@angular/core';
import{DialogComponent} from './dialog/dialog.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { error } from '@angular/compiler/src/util';
import { ApiService } from './services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'crud';
 


   constructor(private dialog:MatDialog,private api:ApiService){}
  ngOnInit(): void {
  }
  

 

  

}

