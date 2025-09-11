# Experts API Integration Documentation

## Overview
This document details the integration of the Experts API endpoint (`http://globe.ridealmobility.com/api/home/experts`) into the "Loved by Travellers, Backed by Experts" section of the Globe Angel website.

## API Endpoint
- **URL**: `http://globe.ridealmobility.com/api/home/experts`
- **Method**: GET
- **Content-Type**: application/json

## API Response Structure
```json
{
  "experts": [
    {
      "_id": "68c287ecbd37af60fb6301ee",
      "heading": "Loved by Travellers, Backed by Experts",
      "subheading": "These destinations are topping the charts for a reason — let's take you there.",
      "countries": ["Vietnam", "New Zealand", "Brazil", "Japan", "Australia"],
      "images": [
        "uploads/1757579243881.avif",
        "uploads/1757579243957.jpg", 
        "uploads/1757579244371.jpg"
      ],
      "createdAt": "2025-09-11T08:27:24.440Z",
      "updatedAt": "2025-09-11T08:27:24.440Z",
      "__v": 0
    }
  ]
}
```

## Integration Details

### HTML Structure Updates
The following elements were modified in `index.html`:

1. **Section Container**: Added ID `expertsSection`
2. **Header Container**: Added ID `expertsHeader`  
3. **Title Element**: Added ID `expertsTitle`
4. **Subtitle Element**: Added ID `expertsSubtitle`
5. **Desktop Services**: Added ID `expertsDesktopServices`
6. **Mobile Services**: Added ID `expertsMobileServices`

### Key Features

#### Dynamic Content Management
- **Heading**: Dynamically updates from API `heading` field
- **Subheading**: Updates from API `subheading` field
- **Countries**: Populates both desktop and mobile layouts with `countries` array
- **Images**: Supports image integration from `images` array with URL conversion

#### Responsive Design
- **Desktop Layout**: Horizontal service items with hover effects
- **Mobile Layout**: Vertical cards with background images
- **Consistent Styling**: Maintains existing CSS classes and Bootstrap grid

#### Error Handling
- **CORS Support**: Proper headers for cross-origin requests
- **Fallback Data**: Provides default content if API fails
- **Status Logging**: Comprehensive console logging for debugging

### API Integration Script

The integration script includes:

```javascript
// Function to fetch experts data from API
async function fetchExperts() {
    try {
        const response = await fetch('http://globe.ridealmobility.com/api/home/experts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: Failed to fetch experts data`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        // Fallback data implementation
    }
}
```

#### URL Conversion
The script includes a utility function to convert relative image URLs to absolute URLs:

```javascript
function convertToAbsoluteUrl(relativePath) {
    if (!relativePath) return '';
    if (relativePath.startsWith('http://') || relativePath.startsWith('https://')) {
        return relativePath;
    }
    if (relativePath.startsWith('./')) {
        return relativePath; // Keep local images as is
    }
    return `${API_BASE_URL}/${relativePath}`;
}
```

#### Content Population
- **Desktop Services**: Creates service items with country links and descriptions
- **Mobile Services**: Creates responsive cards with background images
- **Header Updates**: Maintains HTML structure while updating content

### Fallback Strategy

If the API is unavailable, the system uses fallback data:

```javascript
{
    experts: [{
        _id: "fallback_expert_001",
        heading: "Loved by Travellers, Backed by Experts",
        subheading: "These destinations are topping the charts for a reason — let's take you there.",
        countries: ["Vietnam", "New Zealand", "Brazil", "Japan", "Australia"],
        images: ["./images/Vietnam.jpg", "./images/New Zealand.jpg", "./images/Brazil.jpg", "./images/Japan.jpg", "./images/Australia.jpg"],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }]
}
```

## Testing

### Test File: `experts-api-test.html`
A comprehensive test file has been created with:

- **API Status Monitoring**: Real-time status updates
- **Raw Data Display**: JSON response visualization
- **Live Preview**: Actual section rendering
- **Error Handling**: Fallback testing
- **Responsive Testing**: Desktop and mobile views

### Test Features
1. API connectivity testing
2. Data structure validation
3. UI component rendering
4. Error scenario handling
5. Responsive layout verification

## Installation Steps

1. **API Integration**: Script is already integrated into `index.html`
2. **Test**: Open `experts-api-test.html` to verify functionality
3. **Deploy**: No additional setup required - runs on page load

## Initialization

The experts section initializes automatically:

```javascript
setTimeout(() => {
    initializeExperts();
}, 900);
```

The 900ms delay ensures:
- DOM is fully loaded
- Other scripts have initialized
- No conflicts with existing swipers

## Performance Considerations

- **Lazy Loading**: Initializes after other critical scripts
- **Error Recovery**: Graceful fallback prevents page breaking
- **Efficient Updates**: Only updates necessary DOM elements
- **Memory Management**: Clears unused references

## Browser Compatibility

- Modern browsers with fetch API support
- ES6+ JavaScript features
- Bootstrap 5.3.2 compatibility
- Mobile responsive design

## Troubleshooting

### Common Issues:
1. **CORS Errors**: API server must allow cross-origin requests
2. **Image Loading**: Check image URL conversion logic
3. **Layout Issues**: Verify CSS classes are preserved
4. **Mobile View**: Test responsive breakpoints

### Debugging:
- Check browser console for detailed logs
- Use `experts-api-test.html` for isolated testing
- Verify API endpoint accessibility
- Test fallback scenarios

## API Data Mapping

| API Field | Usage | HTML Element |
|-----------|--------|--------------|
| `heading` | Section title | `#expertsTitle` |
| `subheading` | Section subtitle | `#expertsSubtitle` |
| `countries` | Service items | Desktop/Mobile layouts |
| `images` | Background images | Service cards |
| `_id` | Tracking/debugging | Console logs |

## Future Enhancements

1. **Image Optimization**: Lazy loading for better performance
2. **Animation**: Smooth transitions for content updates
3. **Caching**: Local storage for faster subsequent loads
4. **Analytics**: Track user interactions with expert destinations
5. **SEO**: Dynamic meta tags based on API content

## Support

For technical issues:
1. Check console logs for error messages
2. Test with `experts-api-test.html`
3. Verify API endpoint is accessible
4. Ensure proper HTML structure is maintained

Last Updated: September 11, 2025
Integration Status: ✅ Complete and Tested
