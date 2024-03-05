import { describe, expect, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import FriendlyReminder from '@/app/cards/sections/FriendlyReminder/FriendlyReminder';

describe('Friendly reminder section', () => {
  test('It renders', () => {
    expectToRender(<FriendlyReminder />);
  });
});
