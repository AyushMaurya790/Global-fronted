# Trusted API Integration

## Overview
This document describes the integration of the Trusted testimonials API (`http://globe.ridealmobility.com/api/home/trusted`) into the Globe Angel website's testimonial section.

## API Details

### Endpoint
- **URL**: `http://globe.ridealmobility.com/api/home/trusted`
- **Method**: GET
- **Response Format**: JSON

### API Response Structure
```json
[
  {
    "_id": "68c27e31bd37af60fb630055",
    "heading": "Trusted by travellers like you",
    "subheading": "From seamless honeymoons to global conferences — see why our clients keep coming back.",
    "cards": [
      {
        "img": "uploads/1757576752472.jpg",
        "name": "Dina Jems",
        "title": "Traveller",
        "description": "Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris.",
        "_id": "68c27e31bd37af60fb630056"
      },
      {
        "img": "uploads/1757576752658.jpg",
        "name": "Jahid Hassan",
        "title": "Traveller",
        "description": "Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris.",
        "_id": "68c27e31bd37af60fb630057"
      },
      {
        "img": "uploads/1757576753273.jpg",
        "name": "Shwan Pull",
        "title": "Traveller",
        "description": "Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris.",
        "_id": "68c27e31bd37af60fb630058"
      }
    ],
    "createdAt": "2025-09-11T07:45:53.339Z",
    "updatedAt": "2025-09-11T07:45:53.339Z",
    "__v": 0
  }
]
```

## Integration Details

### Files Modified
1. **index.html**
   - Added API integration script
   - Updated testimonial section HTML with IDs for dynamic content
   - Replaced static testimonial cards with dynamic loading

2. **js/script.js**
   - Removed conflicting testimonial swiper initialization
   - Added comment about API handling

### New Features
- **Dynamic Content Loading**: Testimonials are now loaded from the API
- **Fallback Support**: If API fails, fallback data is used
- **Image URL Handling**: Proper handling of both relative and absolute image URLs
- **Responsive Design**: Maintains existing responsive layout
- **Auto-grouping**: Automatically groups testimonials into slides of 3 cards each

### Key Functions

#### `fetchTrustedTestimonials()`
- Fetches data from the trusted API
- Handles CORS requests
- Provides fallback data on error
- Returns processed data object

#### `getImageUrl(imgPath)`
- Converts relative image paths to absolute URLs
- Handles different image path formats
- Provides fallback images for broken links

#### `populateTestimonials(data)`
- Updates heading and subheading from API data
- Dynamically creates testimonial cards
- Groups cards into swiper slides (3 per slide)
- Maintains existing CSS styling

#### `initializeTestimonialSwiper()`
- Initializes Swiper carousel
- Configures pagination and autoplay
- Handles responsive breakpoints

### Error Handling
- **Network Errors**: Gracefully handles API connection failures
- **Invalid Data**: Validates API response structure
- **Image Errors**: Provides fallback images for broken image links
- **Swiper Errors**: Logs and handles swiper initialization errors

### Testing
- **Test File**: `trusted-api-test.html`
- **Features**: 
  - API connection testing
  - Data preview
  - Visual integration testing
  - Error handling demonstration

## Configuration

### API Base URL
The integration uses the base URL: `http://globe.ridealmobility.com/`

### Image Path Handling
- Relative paths starting with `uploads/` are converted to: `http://globe.ridealmobility.com/uploads/filename`
- Absolute URLs (http/https) are used as-is
- Fallback image: `https://randomuser.me/api/portraits/women/44.jpg`

### Swiper Configuration
```javascript
{
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
}
```

## Browser Compatibility
- **Modern Browsers**: Full support for all features
- **CORS**: Requires proper CORS headers from API server
- **Fetch API**: Uses modern fetch API (IE11+ support)
- **ES6 Features**: Uses async/await, template literals

## Performance Considerations
- **Lazy Loading**: API call is delayed by 500ms to avoid conflicts
- **Swiper Reinitialization**: Properly destroys and recreates swiper instances
- **Error Recovery**: Quick fallback to prevent UI blocking
- **Image Optimization**: Includes error handling for missing images

## Maintenance
- **API Endpoint**: Monitor API availability and response structure
- **Image Assets**: Ensure uploaded images are accessible
- **CORS Policy**: Verify cross-origin access permissions
- **Fallback Data**: Update fallback testimonials as needed

## Future Enhancements
- **Caching**: Implement local storage caching for API responses
- **Loading States**: Add skeleton loading animations
- **Admin Panel**: Content management for testimonials
- **A/B Testing**: Support for different testimonial layouts
