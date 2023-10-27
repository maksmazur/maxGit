import { test, expect } from '@playwright/test';
import UdemyClass from '../object/udemy.obj';
import Udemy from '../object/udemy.obj';
import { chromium } from "@playwright/test";



test('Check if there is a course about playwright', async ({ browserName }) => {
  if (browserName !== 'chromium') {
    return;
  }

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  let udemy = new Udemy(page);
        
  await udemy.searchForCourse();


  await browser.close();
});