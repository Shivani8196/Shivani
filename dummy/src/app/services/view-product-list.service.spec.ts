import { TestBed } from '@angular/core/testing';

import { ViewProductListService } from './view-product-list.service';

describe('ViewProductListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewProductListService = TestBed.get(ViewProductListService);
    expect(service).toBeTruthy();
  });
});
