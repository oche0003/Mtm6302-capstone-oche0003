# NASA APOD API Web Application

## About
This repository contains the project files for the NASA APOD (Astronomy Picture of the Day) API web app developed by Perpetual Ocheme for an interactive media design course.

## Student Information
- **Name:** Perpetual Ocheme
- **Student Number:** 41093118

## Project Overview
This project is all about creating a simple web app that uses the NASA APOD API to show daily images of cool astronomical stuff. Users can view the daily image, read a brief explanation, and check out images from different dates. You can even save your favorite images and view them in a gallery.

## Features
- **View APOD:** See the Astronomy Picture of the Day for today or any date you choose.
- **Pick a Date:** Select a date and fetch the APOD for that day.
- **Favorites Gallery:** Save your favorite APODs and toggle a gallery view to see them all in one place.
- **Responsive Design:** Works well on different devices, whether it's a phone, tablet, or computer.

## Design Choices

### Keeping It Simple
The design is super minimalistic to keep the focus on the images, which are the main content. There’s no extra fluff, so users can easily navigate and enjoy the content.

### Focus on Content
- **Images First:** The images are the main attraction, so the design lets them shine without distractions.
- **Easy-to-Read Text:** The explanations and titles are clear and easy to read.

### Consistent Layout
- **Same Look Throughout:** The layout is consistent across all parts of the app to make navigation easy.
- **Centered Content:** Important elements are centered to make the app look clean and organized.

## Recent Changes

### 2024-08-10

#### Functional Improvements
- **JavaScript Tweaks:**
  - Added functionality to save and show favorite images using `localStorage`.
  - Improved error handling for when the API fetch fails.
  - Added a toggle button to show or hide the favorites gallery.

- **Content and Layout Adjustments:**
  - Made sure the APOD content updates without needing to reload the page.
  - Improved the layout so it looks good on all screen sizes, from mobile to desktop.

- **Visual and Functional Enhancements:**
  - Tidied up the design for a more polished look.
  - Added a date and time display so users know when they’re browsing.

## Technical Details

### HTML Structure
- **Index.html:** The structure is simple, with sections for the APOD display, date selection, and the favorites gallery.

### CSS Styling
- **Main.css:** The styles make sure the app is responsive and looks clean. Flexbox is used to manage the layout, especially for the gallery.

### JavaScript Functionality
- **Fetch API:** Used to get data from the NASA APOD API.
- **LocalStorage:** Saves user favorites so they can access them later, even after closing the browser.
- **Event Listeners:** Used for things like picking a date, saving favorites, and toggling the gallery.

### Challenges
- **Dealing with Asynchronous Data:** It was tricky to manage fetching data from the API and updating the page without refreshing, but this was handled with the Fetch API.
- **Responsive Design:** Making sure the app looks good on all devices took some extra testing and tweaking in the CSS.

## How to Use
1. **Open the App:** Load up `pod.nasa.gov/apod/astropix.html` in your web browser.
2. **View Today’s APOD:** The app will automatically load today’s Astronomy Picture of the Day.
3. **Pick a Different Date:** Use the date input to select a different day’s APOD.
4. **Save to Favorites:** Click "Save to Favorites" to keep an image in your favorites.
5. **Show Favorites:** Click "Show Favorites" to view all your saved images in a gallery.

## Conclusion
This NASA APOD web app was built with a focus on simplicity and usability. By sticking to a clean design and using some cool web tech, the app makes it easy to explore and save amazing images of the universe.
