import { test, expect } from '@playwright/test';
import Google from '../object/google.obj';
import { chromium } from "@playwright/test";



test('Check if there is a course about playwright', async ({ browserName }) => {
  if (browserName !== 'chromium') {
    return;
  }

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  let google = new Google(page);
        
  await google.searchForCourse();


  await browser.close();
});