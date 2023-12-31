import { expect, Locator, Page } from '@playwright/test';


export default class GooglePage{

    search: Locator;
    cookies: Locator;
    udemyLink: Locator;
      constructor(public page: Page) {
        


        this.search = this.page.locator('//textarea[@type="search"]');
        this.cookies = this.page.locator(`//button[@class="tHlp8d"]/div[@role="none"][text()='Odrzuć wszystko']`);
        this.udemyLink = this.page.locator(`//a[@href="https://www.udemy.com/topic/Typescript/"]`);

    }

}

