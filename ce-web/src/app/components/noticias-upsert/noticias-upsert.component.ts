import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataStorageService } from 'src/app/services/dataStorage/data-storage.service';

@Component({
  selector: 'app-noticias-upsert',
  templateUrl: './noticias-upsert.component.html',
  styleUrls: ['./noticias-upsert.component.css']
})
export class NoticiasUpsertComponent implements OnInit {
  private Id: number;
  public formGroup: FormGroup;

  private Key:string = "Lista";
  
  constructor( private route: ActivatedRoute, 
    private StorageService: DataStorageService, 
    private formBuilder: FormBuilder) {
    this.iniciarNoticia();

    this.Id = this.route.snapshot.params['id'];
    
    if(this.Id){
      console.log(this.Id);
      this.cargarNoticia(this.Id);
    }
    
   }

   ngOnInit() {
   
  }
     
   iniciarNoticia = () => {
    this.formGroup = this.formBuilder.group({
      id: ['(nueva)', [Validators.required],],
      titulo: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      descripcion: ['', [Validators.required, Validators.minLength(15)]],
      fechaCreacion: [new Date()],
      ultimaModificacion: [new Date()],
    });
  }
  
  guardarData = () => {
    if (this.formGroup.valid) {
      let noticiaIndex = -1;
      const listaNoticias = this.StorageService.getObjectValue(this.Key);
      listaNoticias.forEach((noticia, index) => {
        if (noticia.id == this.formGroup.value.id) {
          noticiaIndex = index;
        }
      });

      if (noticiaIndex >= 0) {
        listaNoticias[noticiaIndex] = this.formGroup.value;
      } else {
        listaNoticias.push(this.formGroup.value);
      }
      this.formGroup.patchValue({ "ultimaModificacion": new Date() });

      this.StorageService.setObjectValue(this.Key, listaNoticias);
      console.log(this.StorageService.getObjectValue(this.Key));

      alert("Información guardada");
    } else {
      alert("Debe completar la información correctamente");
    }
  }

  cargarNoticia = (id: number) => {
    const listaNoticias = this.StorageService.getObjectValue(this.Key);
    listaNoticias.forEach(noticia => {
      if (noticia.Id == id) {
        console.log(this.formGroup);
        this.formGroup = this.formBuilder.group({
          id: [id, [Validators.required],],
          titulo: [noticia.Titulo, [Validators.required]],
          imagen: [noticia.Imagen, [Validators.required]],
          descripcion: [noticia.Descripcion, [Validators.required, Validators.minLength(15)]],
          fechaCreacion: [noticia.FechaCreacion],
          ultimaModificacion: [noticia.UltimaModificacion],
        });
      }
    });
  } 


}
