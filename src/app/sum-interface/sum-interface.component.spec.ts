import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumInterfaceComponent } from './sum-interface.component';
import { InputNumberModule } from 'primeng/inputnumber';

describe('SumInterfaceComponent', () => {
  let component: SumInterfaceComponent;
  let fixture: ComponentFixture<SumInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
