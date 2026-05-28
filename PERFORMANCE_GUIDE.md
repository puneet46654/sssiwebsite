# Performance Implementation Guide

## Quick Start

All optimizations are automatically active. Here's how to verify and use them:

## 1. Verify Service Worker is Running

Check in Chrome DevTools:
- Open DevTools → Application → Service Workers
- You should see `/sw.js` registered and activated
- Green badge indicates it's running

## 2. Check Caching

DevTools → Application → Cache Storage:
- `ssi-static-v2` - Static assets
- `ssi-runtime-v2` - HTML pages
- `ssi-images-v2` - Images
- `ssi-fonts-v2` - Fonts
- `ssi-videos-v2` - Videos

## 3. Performance Monitoring

Open browser console to see performance logs:
```
[Performance] Total page load time: 2400ms
[SW] Service Worker registered successfully
[Performance] LCP: 2100ms (good)
[Performance] CLS: 0.05 (good)
```

## Using Performance Features

### Image Optimization

Replace Image with OptimizedImage:

**Before:**
```tsx
import Image from "next/image";

export default function Hero() {
  return (
    <Image
      src="/images/hero.webp"
      alt="Hero"
      fill
      className="object-cover"
    />
  );
}
```

**After:**
```tsx
import OptimizedImage from "@/components/ui/OptimizedImage";

export default function Hero() {
  return (
    <OptimizedImage
      src="/images/hero.webp"
      alt="Hero"
      fill
      priority
      quality={90}
      className="object-cover"
    />
  );
}
```

### Animation Optimization

Replace custom easing with presets:

**Before:**
```tsx
<motion.div
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }}
>
  Content
</motion.div>
```

**After:**
```tsx
import { slideUp } from "@/lib/animations";

<motion.div variants={slideUp}>
  Content
</motion.div>
```

### Component Memoization

Wrap expensive components:

```tsx
import { memoComponent } from "@/lib/memoization";

// Before
export default function MyComponent(props) { ... }

// After
const MyComponent = memoComponent((props) => {
  // Component code
});

export default MyComponent;
```

### Smooth Scrolling

Use optimized scroll hooks:

```tsx
import { useSmoothScroll, SmoothScrollLink } from "@/lib/scroll";

// In navigation
<SmoothScrollLink href="#features" className="nav-link">
  Features
</SmoothScrollLink>

// Get scroll position
const scrollY = useScrollPosition();

// Animation on scroll
const { ref, isVisible } = useScrollAnimation();
<div ref={ref}>
  {isVisible && <AnimatedContent />}
</div>
```

### Performance Measurement

Track custom metrics:

```tsx
import { markStart, markEnd } from "@/lib/performance";

// Measure an operation
markStart("api-call");
const data = await fetchData();
markEnd("api-call");
// Logs: [Performance] api-call: 234.50ms

// Get memory info
import { getMemoryUsage } from "@/lib/performance";
const memory = getMemoryUsage();
console.log(`Used: ${memory?.usedJSHeapSize} bytes`);
```

## Testing Performance

### Local Testing

1. **Network throttling:**
   - DevTools → Network → Throttle (set to "Slow 3G")
   - Test website performance on slow connections

2. **CPU throttling:**
   - DevTools → Performance → CPU throttle (6x slowdown)
   - See how animations behave with CPU constraints

3. **Lighthouse audit:**
   - DevTools → Lighthouse → Analyze page load
   - Target: 90+ score

### Performance Checklist

- [ ] Service Worker is registered and caching
- [ ] Images are lazy loaded (check Network tab)
- [ ] Fonts preload correctly
- [ ] No layout shifts (CLS < 0.1)
- [ ] Animations use transform/opacity only
- [ ] No console errors or warnings
- [ ] Mobile performance is smooth (60 FPS)

## Optimization Guidelines

### For Images

✅ **DO:**
- Use WebP format
- Set explicit width/height
- Lazy load below-fold images
- Preload hero images
- Use responsive sizes

❌ **DON'T:**
- Use full-resolution images for thumbnails
- Load all images immediately
- Animate image properties
- Skip alt text
- Use unoptimized formats

### For Animations

✅ **DO:**
- Animate transform and opacity
- Keep animations under 600ms
- Use will-change strategically
- Batch animations with stagger
- Respect prefers-reduced-motion

❌ **DON'T:**
- Animate width, height, or position
- Animate many elements simultaneously
- Use blur or filter effects heavily
- Create infinite animations
- Ignore accessibility preferences

### For JavaScript

✅ **DO:**
- Use dynamic imports for large components
- Debounce scroll handlers
- Memoize expensive computations
- Lazy load non-critical code
- Profile with DevTools

❌ **DON'T:**
- Run JavaScript in critical path
- Create memory leaks with listeners
- Block the main thread
- Load unnecessary libraries
- Ignore console warnings

### For CSS

✅ **DO:**
- Use contain on components
- Enable GPU acceleration
- Batch CSS changes
- Use CSS variables
- Minimize repaints

❌ **DON'T:**
- Change complex selectors
- Trigger reflows in loops
- Use expensive properties
- Create layout thrashing
- Over-use gradients

## Common Issues & Solutions

### Issue: Slow Page Load

**Causes:**
- Large hero images
- Uncompressed assets
- Render-blocking JavaScript
- Fonts loading late

**Solutions:**
1. Check image sizes (should be < 500KB)
2. Verify fonts are preloading
3. Use priority loading for hero
4. Profile with DevTools Performance tab

### Issue: Janky Animations

**Causes:**
- Animating layout properties
- Too many simultaneous animations
- GPU acceleration not enabled
- Long tasks blocking main thread

**Solutions:**
1. Use transform and opacity only
2. Reduce animation count
3. Add will-change to animated elements
4. Check Long Tasks in Performance tab

### Issue: High CLS (Layout Shift)

**Causes:**
- Missing image dimensions
- Lazy-loaded content
- Dynamic content insertion
- Scrollbar width change

**Solutions:**
1. Set width/height on all images
2. Reserve space for lazy content
3. Use useScrollbarWidth() hook
4. Avoid content above fold changes

### Issue: Service Worker Not Working

**Causes:**
- Not in HTTPS (except localhost)
- SW.js not registered
- Browser cache issues
- CORS problems

**Solutions:**
1. Check DevTools → Application
2. Clear cache and reload
3. Check console for errors
4. Verify sw.js is accessible

## Performance Budget

Target metrics per page:
- **Initial Load:** < 3 seconds
- **Interaction Ready:** < 4.5 seconds
- **LCP:** < 2.5 seconds
- **FID:** < 100 milliseconds
- **CLS:** < 0.1

## Monitoring in Production

Enable analytics to track real performance:

```tsx
import { reportWebVitals } from "@/lib/performance";

// In your analytics setup
reportWebVitals((metric) => {
  // Send to analytics service
  fetch("/api/analytics", {
    method: "POST",
    body: JSON.stringify(metric)
  });
});
```

## Tools & Resources

### Recommended Tools
- [PageSpeed Insights](https://pagespeed.web.dev)
- [WebPageTest](https://www.webpagetest.org)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

### Documentation
- [Web Vitals](https://web.dev/vitals/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance)
- [MDN Performance Guide](https://developer.mozilla.org/en-US/docs/Web/Performance)

## Support

For questions or issues with performance optimizations:
1. Check the PERFORMANCE.md file
2. Review console logs for hints
3. Profile with Chrome DevTools
4. Test on real devices and networks
