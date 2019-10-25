import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalNavigationComponent } from './portal.navigation.component';

describe('Portal.NavigationComponent', () => {
  let component: PortalNavigationComponent;
  let fixture: ComponentFixture<PortalNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
