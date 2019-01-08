import { VehicleModule } from './vehicle.module';

describe('VehicleModule', () => {
  let vehicleModule: VehicleModule;

  beforeEach(() => {
    vehicleModule = new VehicleModule();
  });

  it('should create an instance', () => {
    expect(vehicleModule).toBeTruthy();
  });
});
