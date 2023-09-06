/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('date picker', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('date-picker/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('range', async ({ page }) => {
    await page.goto('date-picker/range');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('year/month selection', async ({ page }) => {
    await page.goto('date-picker/year-month-selection');
    const button = page.locator('div.selector > ix-button');
    button.click();
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('week start', async ({ page }) => {
    await page.goto('date-picker/week-start');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
