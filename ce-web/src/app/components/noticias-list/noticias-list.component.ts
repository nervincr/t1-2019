import { Component, OnInit } from '@angular/core';
import { cNoticia } from 'src/app/Controladores/noticia';
import { DataStorageService } from 'src/app/services/dataStorage/data-storage.service';


@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.css'],
})
export class NoticiasListComponent implements OnInit {
  aNoticia:cNoticia[] = [];
  aNoticiaGuardada:cNoticia[] = [];
  Key:string = "Lista";
  check:boolean = false;
  constructor(private sDataStorage:DataStorageService) { }

  ngOnInit() {
    this.getNoticias();
  }

  setNoticas(){
    this.aNoticia.push(new cNoticia(1,"Arbol","https://valor-software.com/ngx-bootstrap/assets/images/nature/8.jpg","Arbol asdasd",new Date(),new Date()));
    this.aNoticia.push(new cNoticia(2,"Flor 1","https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg","Flor 1 asdasd",new Date(),new Date()));
    this.aNoticia.push(new cNoticia(3,"Flor 2","https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg","Flor 2 asdasd",new Date(),new Date()));
    this.sDataStorage.setObjectValue(this.Key,this.aNoticia);
  }
  getNoticias(){
    this.setNoticas();
    this.aNoticiaGuardada = this.sDataStorage.getObjectValue(this.Key);
    if(this.aNoticiaGuardada.length > 0){
      this.check = true;  
    }else{
      this.check = false;
    }
  }
}
