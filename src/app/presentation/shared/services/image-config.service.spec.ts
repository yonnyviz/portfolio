import { TestBed, inject } from '@angular/core/testing';

import { ImageConfigService } from './image-config.service';

describe('ImageConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageConfigService]
    });
  });

  it('should be created', inject([ImageConfigService], (service: ImageConfigService) => {
    expect(service).toBeTruthy();
  }));
});
