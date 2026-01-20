# Adding Images to Your Website

## Where to Place Images

All images should be placed in the `public` folder at the root of your project:
```
/public
  /images
    /hero
    /services
    /testimonials
    /about
```

## How to Add Images

### 1. **Hero Section Images**
Place a banner image in `/public/images/hero/`:
- Recommended size: 1920x600px
- Format: JPG or WebP for better performance

Update `src/app/page.tsx` to add an image:
```jsx
<div className="absolute inset-0 bg-cover bg-center" 
  style={{backgroundImage: 'url(/images/hero/banner.jpg)'}}>
</div>
```

### 2. **Feature Card Images**
For the feature cards, add images to `/public/images/services/`:

```jsx
<FeatureCard
  icon="📚"
  title="Programme Guidance"
  image="/images/services/programme.jpg"
  description="..."
/>
```

### 3. **About Page Images**
Add section images to `/public/images/about/`:
- Section background images
- Team photos (if applicable)

### 4. **Testimonial Images**
Add user avatars to `/public/images/testimonials/`:
- Size: 100x100px or larger
- Format: JPG, PNG, or WebP
- Use circular images for best appearance

```jsx
<TestimonialCard
  quote="..."
  author="Student Name"
  role="Undergraduate, Oxford University"
  image="/images/testimonials/avatar-1.jpg"
/>
```

## Recommended Image Sizes

| Use Case | Dimensions | Format |
|----------|-----------|--------|
| Hero Banner | 1920x600px | JPG/WebP |
| Feature Cards | 400x300px | JPG/WebP |
| About Section | 800x600px | JPG/WebP |
| Testimonial Avatar | 100x100px | JPG/PNG/WebP |
| Icons/Logos | SVG (scalable) | SVG |

## Best Practices

1. **Optimize Images**: Use tools like TinyPNG or Cloudinary to compress images
2. **Use WebP Format**: Modern format that reduces file size by ~25-35%
3. **Responsive Images**: Consider using `<Image />` component from Next.js for optimization
4. **Alt Text**: Always add descriptive alt text for accessibility
5. **Lazy Loading**: Images load only when needed (built-in with Next.js Image component)

## Adding Images Using Next.js Image Component

For better performance, import and use the Image component:

```jsx
import Image from 'next/image'

<Image
  src="/images/hero/banner.jpg"
  alt="Study abroad students"
  width={1920}
  height={600}
  priority
/>
```

## Quick Image Sources

If you need placeholder or stock images:
- **Unsplash**: unsplash.com (free, high quality)
- **Pexels**: pexels.com (free stock photos)
- **Pixabay**: pixabay.com (free, various categories)
- **Canva**: canva.com (design + images)

## Color Palette Reference

Primary Colors:
- Blue-600: #2563eb (Primary CTA)
- Blue-700: #1d4ed8 (Darker blue)
- Blue-800: #1e40af (Dark blue)

Accent Colors:
- Green: #16a34a
- Purple: #a855f7
- Orange: #ea580c
- Red: #dc2626

Use these colors in your images to maintain visual consistency!

## Questions?

If you need help adding images or optimizing them, check the Next.js Image documentation:
https://nextjs.org/docs/app/api-reference/components/image
