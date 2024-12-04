import { test, expect } from '@playwright/test';

test('TC6', async ({ page }) => {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('admin')
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('password123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Mobile Application Native' }).click();
  await expect(page.getByRole('heading', { name: 'App icon design' })).toBeVisible();
  await expect(page.getByText('Design', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Logout' }).click();
});