import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodSummonerComponent } from './wood-summoner.component';

describe('WoodSummonerComponent', () => {
  let component: WoodSummonerComponent;
  let fixture: ComponentFixture<WoodSummonerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WoodSummonerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WoodSummonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
