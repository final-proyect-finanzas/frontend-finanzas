import { Company } from './company.entity';

describe('CompanyEntity', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new Company()).toBeTruthy();
  });
});
