import { BikeModule } from './bike.module';

describe('BikeModule', () => {
  let bikeModule: BikeModule;

  beforeEach(() => {
    bikeModule = new BikeModule();
  });

  it('should create an instance', () => {
    expect(bikeModule).toBeTruthy();
  });
});
