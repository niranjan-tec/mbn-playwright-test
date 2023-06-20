import { expect, Page } from "@playwright/test";
import { CommonActionMethodPage } from "./common-action-locators";

export class LoginUrlPage{

    page : Page
    constructor(page:Page){
        this.page = page;
        
    }

    async eFormLoginUrl(){
        //await this.page.goto("http://win-6cgsdmg51od:8500/");
        await this.page.goto("http://win-6cgsdmg51od:50000/sites/MPR/SitePages/MyDashboard.aspx/");
    }
    
}
