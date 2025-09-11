# Logo/Partner API Integration

## Overview
This document describes the integration of the Logo/Partner API (`http://globe.ridealmobility.com/api/home/logo`) into the Globe Angel website's partner section with scrolling marquee animation.

## API Details

### Endpoint
- **URL**: `http://globe.ridealmobility.com/api/home/logo`
- **Method**: GET
- **Response Format**: JSON

### API Response Structure
```json
[
  {
    "_id": "68c27fe6bd37af60fb63006d",
    "images": [
      "uploads/1757577188129.jpg",
      "uploads/1757577188743.jpg", 
      "uploads/1757577189368.jpg",
      "uploads/1757577190058.jpg"
    ],
    "createdAt": "2025-09-11T07:53:10.109Z",
    "updatedAt": "2025-09-11T07:53:10.109Z",
    "__v": 0
  }
]
```

## Integration Details

### Files Modified
1. **index.html**
   - Added Logo API integration script
   - Updated partner section HTML with IDs for dynamic content
   - Replaced static logo images with dynamic loading
   - Removed conflicting logoSwiper initialization

2. **Partner Section Changes**
   - Maintained marquee scrolling animation
   - Added IDs for dynamic content targeting
   - Simplified HTML structure for cleaner API integration

### New Features
- **Dynamic Logo Loading**: Partner logos are now loaded from the API
- **Seamless Marquee Animation**: Logos scroll continuously in a smooth loop
- **Fallback Support**: If API fails, fallback logos are used
- **Image URL Handling**: Proper handling of both relative and absolute image URLs
- **Error Recovery**: Graceful handling of broken image links
- **Automatic Duplication**: Logos are automatically duplicated for seamless looping

### Key Functions

#### `fetchPartnerLogos()`
- Fetches data from the logo API
- Handles CORS requests
- Provides fallback data on error
- Returns processed data object

#### `getLogoImageUrl(imgPath)`
- Converts relative image paths to absolute URLs
- Handles different image path formats
- Provides fallback for missing images

#### `populatePartnerLogos(data)`
- Clears existing static logos
- Creates img elements from API data
- Duplicates logos for seamless marquee loop
- Appends logos to the marquee track

### Animation Details

#### CSS Marquee Animation
```css
.logo-track {
    display: flex;
    gap: 32px;
    animation: marquee 38s linear infinite;
    width: max-content;
    align-items: center;
}

@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
```

#### Logo Styling
```css
.logo-track img {
    width: 150px;
    height: 100px !important;
    object-fit: contain;
    display: block;
    margin: 0 8px;
    filter: none;
}
```

### Error Handling
- **Network Errors**: Gracefully handles API connection failures
- **Invalid Data**: Validates API response structure
- **Image Errors**: Provides fallback images for broken links
- **Missing Images**: Handles empty or null image arrays

### Testing
- **Test File**: `logo-api-test.html`
- **Features**: 
  - API connection testing
  - Data preview with JSON response
  - Visual integration testing
  - Error handling demonstration
  - Live marquee animation preview

## Configuration

### API Base URL
The integration uses the base URL: `http://globe.ridealmobility.com/`

### Image Path Handling
- Relative paths starting with `uploads/` are converted to: `http://globe.ridealmobility.com/uploads/filename`
- Absolute URLs (http/https) are used as-is
- Fallback images: Local partner images from `./images/` directory

### Marquee Configuration
- **Animation Duration**: 38 seconds for complete loop
- **Gap Between Logos**: 32px spacing
- **Logo Dimensions**: 150px width, 100px height
- **Loop Duplication**: 3x repetition for seamless scrolling

## Browser Compatibility
- **Modern Browsers**: Full support for CSS animations and Flexbox
- **CORS**: Requires proper CORS headers from API server
- **Fetch API**: Uses modern fetch API (IE11+ support)
- **CSS Animations**: Uses CSS keyframe animations for smooth scrolling

## Performance Considerations
- **Efficient Animation**: CSS-based animation for smooth performance
- **Image Optimization**: object-fit: contain for proper scaling
- **Memory Management**: Clears existing content before populating new logos
- **Load Timing**: API call delayed to avoid conflicts with other initializations

## Fallback Strategy
If the API fails, the system falls back to:
```javascript
{
    images: [
        './images/icelandPartner.jpg',
        './images/polandPartner.png',
        './images/switzerlandpartner.png',
        './images/par1.jpeg',
        './images/par2.jpeg',
        './images/par3.jpeg',
        './images/par4.jpeg',
        './images/par5.jpeg'
    ]
}
```

## Maintenance
- **API Endpoint**: Monitor API availability and response structure
- **Image Assets**: Ensure uploaded logo images are accessible
- **CORS Policy**: Verify cross-origin access permissions
- **Animation Performance**: Monitor CSS animation smoothness
- **Fallback Images**: Keep local partner images updated

## Future Enhancements
- **Admin Panel**: Content management for partner logos
- **Logo Categorization**: Group logos by partnership type
- **Hover Effects**: Interactive logo animations on hover
- **Lazy Loading**: Load images as they come into viewport
- **Analytics**: Track logo visibility and engagement
- **A/B Testing**: Support for different logo arrangements

## Related Files
- `index.html` - Main integration
- `logo-api-test.html` - Testing and debugging
- `LOGO_API_INTEGRATION.md` - This documentation
- `./images/par*.jpeg` - Fallback partner images
