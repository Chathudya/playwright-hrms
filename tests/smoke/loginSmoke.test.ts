import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import users from '../../data/users.json';

test.describe('Login Smoke Tests', () => {
  test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(users.validUser.username, users.validUser.password);
    await expect(page).toHaveURL(/dashboard/);
  });

  test('Login with invalid credentials shows error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toContain('Invalid credentials');
  });
});
