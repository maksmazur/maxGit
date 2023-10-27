import { expect, Locator, Page } from '@playwright/test';


export default class UdemyPage{

    search: Locator;
    cookies: Locator;

      constructor(public page: Page) {
        


        this.search = this.page.locator('//textarea[@type="search"]');
        this.cookies = this.page.locator(`//button[@class="tHlp8d"]/div[@role="none"][text()='Odrzuć wszystko']`);

    }

}

