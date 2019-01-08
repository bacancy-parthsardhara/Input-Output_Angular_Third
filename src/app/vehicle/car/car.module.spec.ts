import { CarModule } from './car.module';

describe('CarModule', () => {
  let carModule: CarModule;

  beforeEach(() => {
    carModule = new CarModule();
  });

  it('should create an instance', () => {
    expect(carModule).toBeTruthy();
  });
});
