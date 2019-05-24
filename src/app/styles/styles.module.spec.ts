import { StylesModule } from './styles.module';

describe('StylesModule', () => {
  let stylesModule: StylesModule;

  beforeEach(() => {
    stylesModule = new StylesModule();
  });

  it('should create an instance', () => {
    expect(stylesModule).toBeTruthy();
  });
});
