import { expect, Page } from '@playwright/test';

export class LeavePage {
  readonly page: Page;
  readonly leaveMenu = 'a[href="/web/index.php/leave/viewLeaveModule"]';
  readonly pageHeader = 'h6.oxd-text.oxd-text--h6.orangehrm-main-title';
  readonly applyButton = 'nav a:has-text("Apply")';
  readonly fromDateInput = 'input[placeholder="yyyy-mm-dd"]:nth-of-type(1)';
  readonly toDateInput = 'input[placeholder="yyyy-mm-dd"]:nth-of-type(2)';
  readonly commentBox = 'textarea.oxd-textarea';
  readonly applyBtn = 'button[type="submit"]';
  readonly leaveTypeDropdown = 'div.oxd-select-text-input';
  readonly dropdownOption = (option: string) => `//div[@role="option"]//span[text()="${option}"]`;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLeaveApply() {
    await this.page.click(this.leaveMenu);
    await this.page.waitForTimeout(1000); // Allow for rendering delay
    await this.page.click(this.applyButton);
    await this.page.waitForSelector(this.pageHeader);
  }

  async getHeaderTitle() {
    return await this.page.textContent(this.pageHeader);
  }

  async applyForLeave(leaveType: string, fromDate: string, toDate: string, comment?: string) {
    await this.page.waitForSelector('.oxd-form-loader', { state: 'detached' });
    await this.page.waitForSelector('h6:has-text("Apply Leave")');

    const noLeaveMsg = this.page.locator('p.oxd-text--subtitle-2');
    if (await noLeaveMsg.isVisible()) {
      await expect(noLeaveMsg).toHaveText('No Leave Types with Leave Balance');
      console.log('⚠️ Skipped leave form interaction — no leave types available.');
      return;
    }

    await this.page.click(this.leaveTypeDropdown);
    await this.page.click(this.dropdownOption(leaveType));

    await this.page.fill(this.fromDateInput, fromDate);
    await this.page.fill(this.toDateInput, toDate);

    if (comment) {
      await this.page.fill(this.commentBox, comment);
    }

    await this.page.click(this.applyBtn);
    await this.page.waitForTimeout(2000); // Optional delay for UI response
  }
}
