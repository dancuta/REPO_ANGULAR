import { TestBed } from '@angular/core/testing';

import { AppUtils } from './app-utils.service';

describe('AppUtilsService', () => {
  let service: AppUtils;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppUtils);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    const component = new AppUtils();
    console.log('AppUtils.BASE_URL:', AppUtils.BASE_URL);

    expect(AppUtils.BASE_URL).toEqual('http://localhost:3001');
    expect(AppUtils.RESERVATION_BASE_URL).toEqual('http://localhost:3001/reservations');
  });
});
