import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticias-upsert',
  templateUrl: './noticias-upsert.component.html',
  styleUrls: ['./noticias-upsert.component.css']
})
export class NoticiasUpsertComponent implements OnInit {
  private Id: number;
  
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.Id = this.route.snapshot.params['id'];
  }
}
