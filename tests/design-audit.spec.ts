import { test, expect } from '@playwright/test';

test.describe('Comprehensive Design Audit', () => {
  const pages = [
    { path: '/', name: 'home' },
    { path: '/work', name: 'work' },
    { path: '/work/therapair', name: 'therapair' },
    { path: '/services', name: 'services' },
    { path: '/blog', name: 'blog' },
    { path: '/about', name: 'about' },
    { path: '/contact', name: 'contact' }
  ];

  for (const page of pages) {
    test(`${page.name} - spacing and layout`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path);
      await browserPage.waitForLoadState('networkidle');
      
      // Capture full page screenshot
      await browserPage.screenshot({ 
        path: `tests/screenshots/audit-${page.name}.png`, 
        fullPage: true 
      });

      // Check section spacing
      const sections = await browserPage.locator('section').all();
      console.log(`${page.name}: Found ${sections.length} sections`);

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const box = await section.boundingBox();
        if (box) {
          const padding = await section.evaluate((el) => {
            const style = window.getComputedStyle(el);
            return {
              top: style.paddingTop,
              bottom: style.paddingBottom,
              left: style.paddingLeft,
              right: style.paddingRight
            };
          });
          console.log(`Section ${i} padding:`, padding);
        }
      }

      // Check heading hierarchy
      const h1Count = await browserPage.locator('h1').count();
      const h2Count = await browserPage.locator('h2').count();
      const h3Count = await browserPage.locator('h3').count();
      
      console.log(`${page.name} headings - H1: ${h1Count}, H2: ${h2Count}, H3: ${h3Count}`);
      expect(h1Count).toBeGreaterThan(0);

      // Check button spacing
      const buttons = await browserPage.locator('button, a[class*="button"]').all();
      console.log(`${page.name}: Found ${buttons.length} interactive elements`);
    });
  }

  test('Layout consistency check', async ({ page }) => {
    // Check homepage layout
    await page.goto('/');
    
    // Measure container widths
    const containers = await page.locator('[class*="max-w-"]').all();
    const widths = [];
    
    for (const container of containers) {
      const width = await container.evaluate((el) => 
        window.getComputedStyle(el).maxWidth
      );
      widths.push(width);
    }
    
    console.log('Container max-widths used:', [...new Set(widths)]);
    
    // Check gap consistency in grids
    const grids = await page.locator('[class*="grid"]').all();
    for (let i = 0; i < grids.length; i++) {
      const gap = await grids[i].evaluate((el) => 
        window.getComputedStyle(el).gap
      );
      console.log(`Grid ${i} gap:`, gap);
    }
  });
});

