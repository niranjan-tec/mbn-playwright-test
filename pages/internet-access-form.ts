import { Page } from "@playwright/test"

export class InternetAccessForm{

    page:Page;

constructor(page:Page){

    this.page=page;
}

selectDepartment = () => this.page.locator("#inputGroupSelect02");
selectFormName = () => this.page.locator('#inputGroupSelect01');
searchButton = () => this.page.locator('[id="searchBtn"]');
collapseTab = () => this.page.locator('[id=collapseOne]');
selectDesignation = () => this.page.locator('[name="ddEmpDesignation"]');
selectLocation =() => this.page.locator('[name="ddEmpLocation"]');
selectRequestSubmissionTypes = () => this.page.locator('[id="drpRequestSubmissionFor"]');
collapseTransactinFieldsTab =() => this.page.locator('(//button[normalize-space()="Transaction Fields"])[1]');
selectRequestType =() => this.page.locator("(//span[@class='checkmark'])[7]");
businessFields =() => this.page.locator('#txtBusinessNeed');
clickSubmitButton =() => this.page.locator('[id ="btnSubmit"]');




async clickSearchBox(){
    await this.selectDepartment().selectOption('IT');
    await this.selectFormName().selectOption('IA');
    await this.searchButton().click();
    await this.collapseTab().click();
    await this.selectDesignation().selectOption('Managing Director');
    await this.selectLocation().selectOption('SAVW - Pune Chakan Plant');
    await this.selectRequestSubmissionTypes().selectOption('Self');
    await this.collapseTransactinFieldsTab().click();
    await this.selectRequestType().click();
    await this.businessFields().fill("Please provid all the details for this project");
    await this.clickSubmitButton().click();

}
}