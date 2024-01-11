import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountListeComponent } from './account-liste.component';

describe('AccountListeComponent', () => {
  let component: AccountListeComponent;
  let fixture: ComponentFixture<AccountListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
