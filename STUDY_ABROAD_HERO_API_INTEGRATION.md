# Study Abroad Hero API Integration

## Overview
This document describes the integration of the Study Abroad Hero API into the Eduwings.html page.

## API Endpoint
```
http://globe.ridealmobility.com/api/studyabroad/hero
```

## API Response Structure
The API returns an array of hero objects with the following structure:

```json
[
  {
    "_id": "68c129df9d48cf7ca6eedae5",
    "title": "Only The World's Best – For Your Next Voyage",
    "subtitle": "From sun-soaked Mediterranean coasts to the ice-blue edges of Antarctica - discover the world in unparalleled style",
    "backgroundImage": ["uploads/1757489631105.jpg"],
    "createdAt": "2025-09-10T07:33:51.283Z",
    "__v": 0
  },
  {
    "_id": "68c3e58476be341c8a39a553",
    "title": "Your Gateway to Global Education",
    "subtitle": "From application to arrival - GLOBENGEL EduWings guides you every step towards your dream university",
    "backgroundImage": [
      "uploads/1757668698745.avif",
      "uploads/1757668698997.jpg",
      "uploads/1757668713381.jpg"
    ],
    "createdAt": "2025-09-12T09:19:00.839Z",
    "__v": 0
  }
]
```

## Integration Features

### 1. Dynamic Content Loading
- **Title**: Dynamically loaded from API and formatted with special styling for keywords like "Gateway"
- **Subtitle**: Loaded directly from API response
- **Background Images**: All images from all hero items are loaded into a Swiper carousel

### 2. Enhanced Swiper Configuration
- **Loop**: Continuous sliding
- **Autoplay**: 5-second intervals
- **Navigation**: Previous/Next arrows
- **Pagination**: Clickable dots
- **Effect**: Fade transition with cross-fade
- **Auto-refresh**: Updates every 30 seconds

### 3. Fallback Handling
- Graceful error handling with console logging
- Fallback to default content if API fails
- Maintains functionality even when offline

### 4. Image URL Resolution
- Automatically constructs full URLs for API images
- Supports both relative and absolute image paths
- Base URL: `http://globe.ridealmobility.com/`

## Implementation Details

### HTML Changes
1. Added IDs to hero elements for dynamic content updates:
   - `id="heroTitle"` - Main title element
   - `id="heroSubtitle"` - Subtitle element
   - `id="heroSwiperWrapper"` - Swiper slides container

2. Enhanced Swiper with navigation and pagination:
   - Navigation arrows
   - Pagination dots
   - Dynamic slide generation

### JavaScript Integration
1. **API Fetch Function**: `fetchStudyAbroadHeroData()`
   - Handles API requests with error handling
   - Returns parsed JSON data or fallback content

2. **Title Formatting**: `formatHeroTitle()`
   - Applies special styling to keywords
   - Maintains brand consistency

3. **Image URL Resolution**: `getImageUrl()`
   - Constructs proper image URLs
   - Handles both relative and absolute paths

4. **Swiper Initialization**: `initializeStudyAbroadHero()`
   - Dynamically populates slides
   - Configures Swiper with all features
   - Updates content based on API data

## Testing
A comprehensive test file has been created: `study-abroad-hero-api-test.html`

### Test Features:
- Live API testing
- Raw JSON response display
- Parsed data visualization
- Hero section preview
- Error handling demonstration

## File Changes
- **Modified**: `Eduwings.html` - Main integration
- **Created**: `study-abroad-hero-api-test.html` - Testing interface
- **Created**: `STUDY_ABROAD_HERO_API_INTEGRATION.md` - This documentation

## Usage Instructions
1. Open `Eduwings.html` to see the live integration
2. Use `study-abroad-hero-api-test.html` to test and debug the API
3. Check browser console for API loading status and errors

## Refresh Strategy
- Initial load on page ready
- Auto-refresh every 30 seconds
- Manual refresh capability through browser reload

## Browser Compatibility
- Modern browsers with ES6+ support
- Requires internet connection for API access
- Falls back gracefully for offline scenarios

## Performance Considerations
- Lazy loading of images through Swiper
- Efficient DOM updates
- Minimal API calls with reasonable refresh intervals
- Error boundary to prevent application crashes

## Future Enhancements
1. Add loading states and skeleton screens
2. Implement image preloading for better performance
3. Add admin panel for content management
4. Implement A/B testing for different hero variants
5. Add analytics tracking for hero interactions
