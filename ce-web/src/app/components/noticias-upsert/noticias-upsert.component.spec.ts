import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasUpsertComponent } from './noticias-upsert.component';

describe('NoticiasUpsertComponent', () => {
  let component: NoticiasUpsertComponent;
  let fixture: ComponentFixture<NoticiasUpsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasUpsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
