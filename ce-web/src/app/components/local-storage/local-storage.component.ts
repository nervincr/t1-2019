import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../services/dataStorage/data-storage.service';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent implements OnInit {

  constructor(private StorageService: DataStorageService) { }
  Key:string = "Key";

  ngOnInit() {
  }
  
  btnGuardarClic(term:string){
    this.StorageService.setObjectValue(this.Key,term);
    console.log(this.StorageService.getObjectValue(this.Key));
  }
}
