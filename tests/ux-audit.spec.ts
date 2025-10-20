import { test, expect } from '@playwright/test';

test.describe('UX/UI Audit', () => {
  test('Homepage visual audit', async ({ page }) => {
    await page.goto('/');
    
    // Take screenshot for manual review
    await page.screenshot({ path: 'tests/screenshots/homepage.png', fullPage: true });
    
    // Check critical UX elements
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
    
    // Check color contrast
    const h1 = page.locator('h1').first();
    const h1Color = await h1.evaluate((el) => window.getComputedStyle(el).color);
    console.log('H1 color:', h1Color);
    
    // Check font sizes
    const h1FontSize = await h1.evaluate((el) => window.getComputedStyle(el).fontSize);
    console.log('H1 font size:', h1FontSize);
  });

  test('All pages accessibility', async ({ page }) => {
    const pages = ['/', '/work', '/services', '/blog', '/about', '/contact'];
    
    for (const path of pages) {
      await page.goto(path);
      await page.screenshot({ path: `tests/screenshots${path === '/' ? '/home' : path}.png`, fullPage: true });
      
      // Check for proper heading hierarchy
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBeGreaterThan(0);
      
      // Check navigation works
      await expect(page.locator('header')).toBeVisible();
    }
  });
  
  test('Therapair page imagery', async ({ page }) => {
    await page.goto('/work/therapair');
    await page.screenshot({ path: 'tests/screenshots/therapair.png', fullPage: true });
    
    // Check hero image exists
    const heroImages = page.locator('img');
    await expect(heroImages.first()).toBeVisible();
  });
});

