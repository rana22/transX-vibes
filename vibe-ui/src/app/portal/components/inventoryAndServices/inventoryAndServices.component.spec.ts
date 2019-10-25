import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAndServicesComponent } from './inventoryAndServices.component';

describe('Inventory.And.ServicesComponent', () => {
  let component: InventoryAndServicesComponent;
  let fixture: ComponentFixture<InventoryAndServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryAndServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
