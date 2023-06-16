import { test, expect } from '@playwright/test';
import { CommonActionMethodPage } from '../pages/common-action-locators';
import { LoginUrlPage } from '../pages/login-url-page';

test ('E-form loging', async ({page})=>{

  const commonActions = new CommonActionMethodPage(page);
  const loginUrl = new LoginUrlPage(page);

  await loginUrl.eFormLoginUrl();
  await commonActions.loginDetails();

  });

