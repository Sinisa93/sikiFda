import { AddOnsModule } from './add-ons.module';

describe('AddOnsModule', () => {
  let addOnsModule: AddOnsModule;

  beforeEach(() => {
    addOnsModule = new AddOnsModule();
  });

  it('should create an instance', () => {
    expect(addOnsModule).toBeTruthy();
  });
});
