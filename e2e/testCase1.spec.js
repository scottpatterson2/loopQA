import { test, expect } from '@playwright/test';

test('TC1', async ({ page }) => {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('admin')
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('password123')
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Web Application Main web' }).click();
  await expect(page.getByRole('main')).toContainText('Implement user authentication');
  await expect(page.getByText('Feature').first()).toBeVisible();
  await expect(page.getByText('High Priority').first()).toBeVisible();
  await page.getByRole('button', { name: 'Logout' }).click();
});