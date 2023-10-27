import { chromium } from "@playwright/test";
import { Page, expect, Locator } from '@playwright/test';
import UdemyPage from '../Pages/udemy.page';

export default class Udemy {
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
  
    const udemyPage = new UdemyPage(page);
  
    await udemyPage.page.goto('https://www.google.com/');
    await udemyPage.cookies.click();
    await udemyPage.search.click();
    await udemyPage.search.fill(`Typescript udemy`);
    await udemyPage.search.press('Enter');
    
    }


   /* async enterPosting() {
        const vacancyHeader = new VacancyHeader(this.page);
        const publishToWebsite = new PublishToWebsite(this.page);
        //Review before publish

        await vacancyHeader._waitForPageToLoad();
        await vacancyHeader.reviewBeforePublishBtn.click();
        await vacancyHeader.reviewVacancyBeforePublishingSaveBtn.click();
        await vacancyHeader._checkIfSuccessToastIsDisplayed();
        await vacancyHeader._closeSuccessToastMessage();
        await vacancyHeader.publishToWebsiteBtn.click();
        // Publish to Website

        await publishToWebsite.sectorBtn.click();
        await publishToWebsite.regionBtn.click();
        await publishToWebsite.functionGroupBtn.click();
        await publishToWebsite.specialismBtb.click();
        await publishToWebsite.educationLvlBtn.click();
        await publishToWebsite.educationDirectionBtn.click();
        await publishToWebsite.languagesBtn.click();
        await publishToWebsite.salaryIndicationBtn.click();
        await publishToWebsite.workOfExperienceBtn.click();
        await publishToWebsite.availabilityBtn.click();
        await publishToWebsite.publishToWebsiteSaveBtn.click();

        await publishToWebsite._checkIfSuccessToastIsDisplayed();
        await publishToWebsite._closeSuccessToastMessage();

     //   expect(vacancyHeader.status).toHaveText('ONLINE');
   }*/

   

}

