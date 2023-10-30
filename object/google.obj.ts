import { chromium } from "@playwright/test";
import { Page, expect, Locator } from '@playwright/test';
import UdemyPage from '../Pages/google.page';
import GooglePage from "../Pages/google.page";

export default class Google {
    page: Page
    UdemyPag:any;
    

    constructor(page: Page, args: any = '') {
        this.page = page;
      
        if (args) {
            Object.assign(this, args)
        }

      
    }

   async searchForCourse(){

    const browser = await chromium.launch();
    const page = await browser.newPage();
  
    const googlePage = new GooglePage(page);
  
    await googlePage.page.goto('https://www.google.com/');
    await googlePage.cookies.click();
    await googlePage.search.click();
    await googlePage.search.fill(`Typescript udemy`);
    await googlePage.search.press('Enter');
  

    await googlePage.udemyLink.click();

    //await page.waitForSelector(await udemyPage.udemyLink.click());

    }


   /* async enterPosting() {
        const vacancyHeader = new VacancyHeader(this.page);
        const publishToWebsite = new PublishToWebsite(this.page);
        //Review before publish

        await vacancyHeader._waitForPageToLoad();
        await vacancyHeader.reviewBeforePublishBtn.click();
     //   expect(vacancyHeader.status).toHaveText('ONLINE');
   }*/

   

}

