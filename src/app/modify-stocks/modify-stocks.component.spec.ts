import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyStocksComponent } from './modify-stocks.component';

describe('ModifyStocksComponent', () => {
  let component: ModifyStocksComponent;
  let fixture: ComponentFixture<ModifyStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifyStocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
