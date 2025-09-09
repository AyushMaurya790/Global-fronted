// Profile Management Functions
// This file handles user profile fetching and management after login

// Function to fetch user profile after successful login
function fetchUserProfile(token) {
    fetch('http://globe.ridealmobility.com/api/auth/profile', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    })
    .then(async response => {
        console.log('Profile response status:', response.status);
        let profileData;
        try {
            profileData = await response.json();
        } catch (err) {
            console.error('Invalid JSON response from profile API');
            redirectToDashboard();
            return;
        }
        
        if (!response.ok) {
            console.error('Profile fetch failed:', profileData);
            redirectToDashboard();
            return;
        }
        
        // Store profile data
        localStorage.setItem('userProfile', JSON.stringify(profileData));
        console.log('Profile data stored:', profileData);
        
        // Show profile success message and redirect
        alert('🎉 Profile loaded! Welcome ' + (profileData.firstName || 'User') + '! Redirecting to dashboard...');
        redirectToDashboard();
    })
    .catch(error => {
        console.error('Profile fetch error:', error);
        alert('Profile fetch failed, but login was successful. Redirecting to dashboard...');
        redirectToDashboard();
    });
}

// Function to redirect to dashboard
function redirectToDashboard() {
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1000);
}

// Function to load and display user profile (for dashboard)
function loadUserProfile() {
    const profileData = localStorage.getItem('userProfile');
    const authToken = localStorage.getItem('authToken');
    
    if (profileData) {
        try {
            const profile = JSON.parse(profileData);
            displayProfile(profile);
        } catch (error) {
            console.error('Error parsing profile data:', error);
            if (authToken) {
                fetchProfileFromAPI(authToken);
            }
        }
    } else if (authToken) {
        // If no profile data but have token, fetch from API
        fetchProfileFromAPI(authToken);
    }
}

// Function to fetch profile from API if not in localStorage
function fetchProfileFromAPI(token) {
    fetch('http://globe.ridealmobility.com/api/auth/profile', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    })
    .then(async response => {
        if (response.ok) {
            const profileData = await response.json();
            localStorage.setItem('userProfile', JSON.stringify(profileData));
            displayProfile(profileData);
        } else {
            console.error('Failed to fetch profile');
        }
    })
    .catch(error => {
        console.error('Profile fetch error:', error);
    });
}

// Function to display profile data (for dashboard)
function displayProfile(profile) {
    const profileSection = document.getElementById('profileSection');
    if (profileSection) {
        profileSection.style.display = 'block';
        
        const elements = {
            'profileFirstName': profile.firstName || '-',
            'profileLastName': profile.lastName || '-',
            'profileEmail': profile.email || '-',
            'profileMobile': profile.mobile || '-',
            'profileGender': profile.gender || '-'
        };
        
        // Update profile fields
        Object.keys(elements).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = elements[id];
            }
        });
        
        // Format date of birth
        if (profile.dob) {
            const dobElement = document.getElementById('profileDob');
            if (dobElement) {
                const date = new Date(profile.dob);
                const formattedDate = date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                dobElement.textContent = formattedDate;
            }
        }
        
        // Update welcome message with user name
        const welcomeMsg = document.querySelector('.welcome-message h2');
        if (welcomeMsg && profile.firstName) {
            welcomeMsg.textContent = `🎉 Welcome back, ${profile.firstName}! Globe Angel Dashboard`;
        }
    }
}

// Enhanced logout function that clears profile data
function logoutUser() {
    if (confirm('Are you sure you want to logout?')) {
        // Clear any stored user data
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        localStorage.removeItem('userProfile');
        
        // Redirect to home page
        window.location.href = 'index.html';
    }
}

// Function to update user profile
function updateUserProfile(profileData) {
    const authToken = localStorage.getItem('authToken');
    
    if (!authToken) {
        throw new Error('Authentication token not found');
    }

    return fetch('http://globe.ridealmobility.com/api/auth/profile', {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + authToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(profileData)
    })
    .then(async response => {
        let responseData;
        try {
            responseData = await response.json();
        } catch (err) {
            throw new Error('Invalid response from server');
        }

        if (!response.ok) {
            throw new Error(responseData.message || 'Failed to update profile');
        }

        // Update localStorage with new data
        localStorage.setItem('userProfile', JSON.stringify(profileData));
        
        return responseData;
    });
}
