# Tiffsy Website - Product Requirements Document

## Original Problem Statement
Build a website presence for Tiffsy, a food meal delivery startup. The website should be informative, visually appealing with cool animations, and showcase the following USPs:
1. Hygienic preparation with complete kitchen transparency (feed page feature)
2. Flexible voucher packs with discounted pricing and complete flexibility (pause, skip, auto-order)
3. Homely, hygienic, quality food with better taste, delivery, and support

**Key Requirements:**
- Static informational website (no backend functionality)
- Visually appealing with smooth animations
- Include App Store and Google Play Store buttons (to be linked later)
- Social media icons (to be linked later)
- Support email: support@tiffsy.com
- Simple, structured code for easy future modifications
- Use orange/coral theme from brand identity

## Architecture
- **Frontend:** React with Tailwind CSS
- **Components:** Shadcn UI components
- **Styling:** Custom animations, smooth scrolling, responsive design
- **Assets:** Images from Unsplash, Logo provided by client

## What's Been Implemented (February 13, 2026)

### Pages Created
1. **Home.jsx** - Single-page landing with all sections

### Sections Implemented
1. **Hero Section**
   - Tiffsy logo and branding
   - Navigation menu (Home, Our Kitchen, Vouchers, Why Us, Reviews)
   - Headline: "Hygienic, Homely Food Delivered to Your Door"
   - App Store and Google Play Store download buttons
   - Stats showcase (10k+ customers, 50k+ meals, 4.8 rating)
   - Beautiful thali image with 100% Hygienic badge

2. **Kitchen Transparency Section**
   - "See Your Food Being Prepared" headline
   - Commercial kitchen image with "Live Updates" indicator
   - Three feature cards:
     - Daily Kitchen Feed
     - Hygiene First
     - Engage with Us

3. **Voucher Packs Section**
   - "Flexible Voucher Packs" headline
   - Three voucher options:
     - Daily Meal Plans
     - Weekday/Weekend Packs (highlighted as MOST POPULAR)
     - Complete Flexibility
   - Note about ordering without vouchers

4. **Why Choose Tiffsy Section**
   - Four benefit cards:
     - Homely Taste
     - Superior Hygiene
     - Better Quality
     - Reliable Delivery
   - "Less Hassle, More Delight" content with food variety image

5. **Testimonials Section**
   - Three customer reviews with 5-star ratings
   - Customer profiles (Priya Sharma, Rahul Verma, Anjali Patel)
   - Happy customer image

6. **Download CTA Section**
   - Orange gradient background
   - "Ready to Experience Tiffsy?" headline
   - App Store and Play Store buttons

7. **Footer**
   - Tiffsy logo and tagline
   - Quick Links navigation
   - Support email (support@tiffsy.com)
   - Social media icons (Facebook, Instagram, Twitter, LinkedIn)
   - Copyright notice

### Design Features
- Orange/coral color scheme (#FF8B5A, #FF7A4D)
- Smooth scroll behavior
- Custom animations (fade-in-up, fade-in-left, fade-in-right, pulse, bounce)
- Hover effects on cards and buttons
- Fixed header with backdrop blur
- Custom scrollbar with orange accent
- Responsive grid layouts
- Lucide-react icons throughout

### Technical Implementation
- No mock data required (static informational site)
- All images loaded from external URLs
- Clean component structure
- Tailwind CSS utilities
- Custom CSS animations in index.css

## User Personas
1. **Working Professionals** - Need convenient, healthy meals without daily ordering hassle
2. **Health-Conscious Individuals** - Want hygienic, quality homely food
3. **Busy Families** - Seeking reliable meal delivery with flexibility

## Core Requirements (Static)
- Single-page responsive website
- Smooth animations and transitions
- App download buttons (links TBD)
- Social media icons (links TBD)
- Professional, appetizing food imagery
- Clear value proposition and USPs
- Easy-to-modify code structure

## Prioritized Backlog
### P0 (Critical - Completed)
- ✅ Hero section with branding
- ✅ Kitchen transparency showcase
- ✅ Voucher packs information
- ✅ Why Choose Tiffsy benefits
- ✅ Customer testimonials
- ✅ Download CTA section
- ✅ Footer with contact info

### P1 (High Priority - Future)
- Link App Store and Play Store buttons to actual app URLs
- Link social media icons to Tiffsy social profiles
- Add custom tagline when finalized
- Optimize images for faster loading
- Add SEO meta tags

### P2 (Medium Priority - Future)
- Add more customer testimonials
- Create "About Us" section
- Add FAQ section
- Implement contact form
- Add blog/news section for updates

## Next Action Items
1. Obtain App Store and Play Store URLs from client to link download buttons
2. Obtain social media profile URLs (Facebook, Instagram, Twitter, LinkedIn)
3. Finalize custom tagline for hero section
4. Review and approve website design
5. Consider adding more sections if needed (FAQ, About, Contact form)
6. Deploy to production when ready
