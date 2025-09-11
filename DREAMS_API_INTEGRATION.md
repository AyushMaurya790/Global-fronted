# Dreams/Hero API Integration

## Overview
This document describes the integration of the Dreams API (`http://globe.ridealmobility.com/api/home/dreams`) into the Globe Angel website's hero section, enabling dynamic content management for the main landing banner.

## API Details

### Endpoint
- **URL**: `http://globe.ridealmobility.com/api/home/dreams`
- **Method**: GET
- **Response Format**: JSON

### API Response Structure
```json
{
  "dreams": [
    {
      "_id": "68c29165bd37af60fb63029f",
      "heading": "DREAM. EXPLORE. DISCOVER.",
      "subheading": "Begin your journey",
      "backgroundVideo": "uploads/1757581654126.mp4",
      "createdAt": "2025-09-11T09:07:49.936Z",
      "updatedAt": "2025-09-11T09:07:49.936Z",
      "__v": 0
    }
  ]
}
```

## Integration Details

### Files Modified
1. **index.html**
   - Added Dreams API integration script
   - Updated hero section with IDs for dynamic content
   - Added video background element support
   - Maintained existing search functionality and styling

2. **Hero Section Updates**
   - Added `id="heroSection"` to the main hero container
   - Added `id="heroTitle"` to the main heading
   - Added `id="heroSubtitle"` to the subtitle text
   - Added `id="heroContent"` to the content wrapper
   - Added video background element with proper fallback

### New Features
- **Dynamic Hero Content**: Main headline and subtitle now load from API
- **Video Background Support**: Can display video backgrounds from API
- **Fallback Strategy**: Static background image if video unavailable
- **Responsive Design**: Maintains mobile-first responsive behavior
- **Search Integration**: Preserves existing search functionality
- **Performance Optimized**: Video autoplay with muted and loop attributes

### Key Functions

#### `fetchDreamsData()`
- Fetches data from the dreams API
- Handles CORS requests
- Provides fallback data on error
- Returns processed data object with dreams array

#### `getDreamVideoUrl(videoPath)`
- Converts relative video paths to absolute URLs
- Handles different video path formats
- Returns null for invalid/missing paths
- Supports MP4 video format

#### `populateHeroSection(data)`
- Updates hero heading from API data
- Updates hero subtitle from API data
- Sets video background if available
- Falls back to static background image
- Maintains all existing styling and animations

### HTML Structure
The hero section is structured as:
```html
<section class="hero-section" id="heroSection">
  <div class="hero-content" id="heroContent">
    <h1 class="hero-title" id="heroTitle">[DYNAMIC_HEADING]</h1>
    <p class="hero-subtitle" id="heroSubtitle">[DYNAMIC_SUBHEADING]</p>
    <div class="search-box">
      <input type="text" placeholder="Search by destinations, travel theme">
      <i class="fa fa-search"></i>
    </div>
  </div>
  <video id="heroBackgroundVideo" autoplay muted loop>
    <source src="[DYNAMIC_VIDEO_URL]" type="video/mp4">
  </video>
</section>
```

### CSS Classes Maintained
- `.hero-section` - Main hero container with background
- `.hero-content` - Content wrapper with centering
- `.hero-title` - Main heading styling (60px font-size)
- `.hero-subtitle` - Subtitle with script font (64px)
- `.heading_font_family` - Montserrat font for heading
- `.silver-South-family` - Script font for subtitle
- `.search-box` - Search input container styling

### Video Background Features
- **Autoplay**: Automatically starts playing when loaded
- **Muted**: Plays without sound (required for autoplay)
- **Loop**: Continuously repeats the video
- **Object-fit Cover**: Maintains aspect ratio and fills container
- **Fallback Support**: Graceful degradation to static background
- **Performance**: Loads after other critical content

### Error Handling
- **Network Errors**: Gracefully handles API connection failures
- **Invalid Data**: Validates API response structure
- **Video Errors**: Falls back to static background if video fails
- **Missing Fields**: Uses default content for missing data
- **CORS Issues**: Proper error messaging for cross-origin problems

### Testing
- **Test File**: `dreams-api-test.html`
- **Features**: 
  - API connection testing
  - Data preview with JSON response
  - Visual hero section preview
  - Video background testing
  - Error handling demonstration
  - Mobile responsiveness testing

## Configuration

### API Base URL
The integration uses the base URL: `http://globe.ridealmobility.com/`

### Video Path Handling
- Relative paths starting with `uploads/` are converted to: `http://globe.ridealmobility.com/uploads/filename`
- Absolute URLs (http/https) are used as-is
- Video format: MP4 (recommended for web compatibility)
- Fallback: Static background image (`./images/banner.webp`)

### Background Priority
1. **Video Background** (if available from API)
2. **Static Image Background** (fallback)
3. **Solid Color Background** (final fallback)

### Mobile Responsiveness
```css
@media (max-width: 768px) {
  .hero-title { font-size: 36px; margin-bottom: 60px; }
  .hero-subtitle { font-size: 36px; }
  .hero-content { margin-top: 80px !important; }
}
```

## Browser Compatibility
- **Video Support**: Modern browsers with HTML5 video support
- **Autoplay**: Muted autoplay supported in most modern browsers
- **CORS**: Requires proper CORS headers from API server
- **Fetch API**: Uses modern fetch API (IE11+ support)
- **CSS**: Flexbox and modern layout features

## Performance Considerations
- **Early Initialization**: Hero loads first (200ms delay)
- **Video Optimization**: Proper video compression recommended
- **Lazy Loading**: Video loads after critical content
- **Bandwidth**: Consider video file sizes for mobile users
- **Caching**: Video files should be cached for repeat visits

## SEO Considerations
- **Text Content**: Maintains searchable text content
- **Alt Tags**: Video element includes fallback text
- **Performance**: Fast loading hero section
- **Accessibility**: Maintains keyboard navigation for search
- **Schema Markup**: Consider adding structured data for hero content

## Content Management
The API allows dynamic management of:
- **Main Heading**: Primary hero title (e.g., "DREAM. EXPLORE. DISCOVER.")
- **Subtitle**: Secondary motivational text (e.g., "Begin your journey")
- **Background Video**: Hero background video content
- **Timing**: Content updates reflect immediately

## Video Requirements
- **Format**: MP4 (H.264 codec recommended)
- **Duration**: 10-30 seconds for optimal loading
- **Resolution**: 1920x1080 or higher for quality
- **File Size**: Under 10MB for web performance
- **Aspect Ratio**: 16:9 or ultra-wide formats
- **Compression**: Optimized for web streaming

## Fallback Strategy
If the API fails, the system falls back to:
```javascript
{
    dreams: [
        {
            heading: "DREAM. EXPLORE. DISCOVER.",
            subheading: "Begin your journey",
            backgroundVideo: null // uses static background
        }
    ]
}
```

## Maintenance
- **API Endpoint**: Monitor API availability and response structure
- **Video Assets**: Ensure uploaded videos are accessible and optimized
- **CORS Policy**: Verify cross-origin access permissions
- **Performance**: Monitor video loading times and file sizes
- **Content Quality**: Review hero content for brand consistency

## Future Enhancements
- **Multiple Videos**: Support for video playlist/rotation
- **Interactive Elements**: Clickable areas within video
- **Analytics**: Track video engagement and completion rates
- **A/B Testing**: Support for different hero variations
- **Personalization**: Dynamic content based on user preferences
- **Localization**: Multi-language hero content support
- **Advanced Media**: Support for WebM, poster images, and captions

## Related Files
- `index.html` - Main integration
- `dreams-api-test.html` - Testing and debugging
- `DREAMS_API_INTEGRATION.md` - This documentation
- `./images/banner.webp` - Fallback static background
- `./CSS/style.css` - Hero styling definitions

## Troubleshooting
- **Video Not Playing**: Check video format, CORS headers, and file accessibility
- **API Errors**: Verify endpoint URL and network connectivity
- **Styling Issues**: Ensure CSS classes are preserved
- **Mobile Issues**: Test video autoplay policies on mobile devices
- **Performance**: Monitor video file sizes and loading times
