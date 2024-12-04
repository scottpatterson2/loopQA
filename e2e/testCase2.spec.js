import { test, expect } from '@playwright/test';

test('TC2', async ({ page }) => {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('admin')
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('password123')
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Web Application Main web' }).click();
  await expect(page.getByRole('heading', { name: 'To Do (2)' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Fix navigation bug' })).toBeVisible();
  await expect(page.getByText('Bug', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Logout' }).click();
});