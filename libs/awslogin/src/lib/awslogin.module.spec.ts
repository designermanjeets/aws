import { async, TestBed } from '@angular/core/testing';
import { AwsloginModule } from './awslogin.module';

describe('AwsloginModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AwsloginModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AwsloginModule).toBeDefined();
  });
});
