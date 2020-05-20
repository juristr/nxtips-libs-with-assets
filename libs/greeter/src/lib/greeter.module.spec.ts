import { async, TestBed } from '@angular/core/testing';
import { GreeterModule } from './greeter.module';

describe('GreeterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GreeterModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GreeterModule).toBeDefined();
  });
});
