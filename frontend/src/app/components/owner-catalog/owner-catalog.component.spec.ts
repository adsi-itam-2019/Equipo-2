import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerCatalogComponent } from './owner-catalog.component';

describe('OwnerCatalogComponent', () => {
  let component: OwnerCatalogComponent;
  let fixture: ComponentFixture<OwnerCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
