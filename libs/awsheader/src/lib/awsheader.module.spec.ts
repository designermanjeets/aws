import { async, TestBed } from '@angular/core/testing';
import { AwsheaderModule } from './awsheader.module';

describe('AwsheaderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AwsheaderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AwsheaderModule).toBeDefined();
  });
});
