import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import users from '../../data/users.json';

test.describe('Login Smoke Tests', () => {

  test('SM-01 | Login with valid credentials redirects to Dashboard', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(users.validUser.username, users.validUser.password);
    await expect(page).toHaveURL(/dashboard/);
  });

  test('SM-02 | Login with invalid credentials shows error message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toContain('Invalid credentials');
  });

  test('SM-03 | Login with empty username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('', users.validUser.password);
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toBeTruthy();
  });

  test('SM-04 | Login with empty password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(users.validUser.username, '');
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toBeTruthy();
  });

  test('SM-05 | Login with empty credentials shows error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('', '');
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toBeTruthy();
  });

});
