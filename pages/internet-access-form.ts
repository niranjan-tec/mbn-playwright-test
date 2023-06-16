import { Page } from "@playwright/test"

export class InternetAccessForm{

    page:Page;

constructor(page:Page){

    this.page=page;
}

formSearchBox = () => this.page.locator('#Searchforms');
selectInternetAccessForm = () => this.page.locator('#ui-id-36');
selectInter =() => this.page.getByAltText('Internet Access Form | IA');



async clickSearchBox(){
    await this.formSearchBox().fill("Internet Access Form");

    await this.selectInter().click();

}

}