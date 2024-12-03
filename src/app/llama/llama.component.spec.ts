import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamaComponent } from './llama.component';

describe('LlamaComponent', () => {
  let component: LlamaComponent;
  let fixture: ComponentFixture<LlamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlamaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
