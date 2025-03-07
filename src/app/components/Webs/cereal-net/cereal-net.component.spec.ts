import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerealNetComponent } from './cereal-net.component';

describe('CerealNetComponent', () => {
  let component: CerealNetComponent;
  let fixture: ComponentFixture<CerealNetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CerealNetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CerealNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
