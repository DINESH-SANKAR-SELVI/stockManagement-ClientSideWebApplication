import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFactoryComponent } from './company-factory.component';

describe('CompanyFactoryComponent', () => {
  let component: CompanyFactoryComponent;
  let fixture: ComponentFixture<CompanyFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyFactoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
