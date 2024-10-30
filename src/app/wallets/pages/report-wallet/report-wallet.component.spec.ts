import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportWalletComponent } from './report-wallet.component';

describe('ReportWalletComponent', () => {
  let component: ReportWalletComponent;
  let fixture: ComponentFixture<ReportWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportWalletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
