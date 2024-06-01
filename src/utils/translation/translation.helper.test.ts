import { getLocales } from 'react-native-localize';

import i18n from 'i18next';

import { getCurrentDeviceLanguage, initI18N } from './translation.helper';

const mockedLocale = 'fr';

jest.mock('react-native-localize', () => ({
  __esModule: true,
  getLocales: jest.fn().mockImplementation(() => [
    {
      languageCode: mockedLocale,
    },
  ]),
}));

jest.doMock('i18next', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    use: () =>
      jest.fn().mockReturnValue(() => ({
        init: () => jest.fn(),
      })),
  }),
}));

describe('/utils/i18n', () => {
  describe('getCurrentDeviceLanguage', () => {
    it('returns mocked locale', () => {
      expect(getCurrentDeviceLanguage()).toBe(mockedLocale);
      expect(getLocales).toHaveBeenCalledTimes(1);
    });
  });

  describe('initI18N', () => {
    it('runs init18N', () => {
      const mockSpy = jest.spyOn(i18n, 'use');

      initI18N();

      expect(mockSpy).toHaveBeenCalledTimes(1);
    });
  });
});
