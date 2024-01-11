import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountListepComponent } from './account-listep.component';

describe('AccountListepComponent', () => {
  let component: AccountListepComponent;
  let fixture: ComponentFixture<AccountListepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountListepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountListepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
