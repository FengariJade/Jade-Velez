import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertosOnlineComponent } from './puertos-online.component';

describe('PuertosOnlineComponent', () => {
  let component: PuertosOnlineComponent;
  let fixture: ComponentFixture<PuertosOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuertosOnlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PuertosOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
