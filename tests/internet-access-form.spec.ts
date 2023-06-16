import { test, expect } from "@playwright/test";
import { CommonActionMethodPage } from "../pages/common-action-locators";
import { LoginUrlPage } from "../pages/login-url-page";
import { InternetAccessForm } from "../pages/internet-access-form";


test ('Internet Access Form', async ({page})=>{

    const commonActions = new CommonActionMethodPage(page);
    const loginUrl = new LoginUrlPage(page);
    const internetAccessForm = new InternetAccessForm(page)
  
    await loginUrl.eFormLoginUrl();
    await commonActions.loginDetails();
    await internetAccessForm.clickSearchBox();
  
    });
  
