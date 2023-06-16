import { Page } from "@playwright/test"
import { LoginUrlPage } from "./login-url-page";

export class CommonActionMethodPage{

    page : Page

    constructor(page:Page){
        this.page = page;
    }
    
    //Locators

    userId = () => this.page.locator("#email");
    userPass = () => this.page.locator("#password");
    loginButton =() => this.page.locator('[id ="btnLogin"]');



    //Action Method

    async loginDetails(){

        await this.userId().fill("cpu");
        await this.userPass().fill("Mobinext@123");
        await this.loginButton().click();
    }
    
}