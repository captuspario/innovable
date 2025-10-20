# Spacing & Layout Fix Plan

## Standardized System

### Section Padding (Vertical)
- **Hero sections**: `py-32 md:py-40` (128px-160px)
- **Standard sections**: `py-24 md:py-32` (96px-128px)
- **Compact sections**: `py-16 md:py-20` (64px-80px)

### Container Max-Widths
- **Standard**: `max-w-[1440px]` (main content)
- **Narrow**: `max-w-[1200px]` (detailed content)
- **Reading**: `max-w-[800px]` (blog posts, forms)
- **Cards**: Individual elements don't need max-w

### Grid Gaps
- **Large grids**: `gap-8` (32px)
- **Medium grids**: `gap-6` (24px)
- **Small grids**: `gap-4` (16px)

### Margins Between Sections
- **Large**: `mb-20` (80px)
- **Medium**: `mb-16` (64px)
- **Small**: `mb-12` (48px)

## Current Issues by Page

### HomePage
- ✅ Good hero padding
- ⚠️ Inconsistent grid gaps
- ⚠️ Featured work section needs adjustment

### WorkPage  
- ✅ Good hero
- ⚠️ Grid gaps inconsistent

### TherapairCaseStudy
- ⚠️ Hero section has 0px padding (uses internal spacing)
- ⚠️ Multiple sections with 96px - should be consistent

### Services, Blog, About, Contact
- ⚠️ All have 96px padding - should be 96-128px
- ⚠️ Grid gaps vary

## Fix Strategy
1. Standardize all section padding
2. Fix container max-widths
3. Standardize grid gaps
4. Ensure proper spacing between elements
5. Fix alignment issues

