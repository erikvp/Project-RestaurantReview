# Udacity Front End Developer Course

## Project - Restaurant Reviews Stage 1

### Objective

For the **Restaurant Reviews** project, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

The original starter files can be found here: [Udacity Github Respoitory](https://github.com/udacity/mws-restaurant-stage-1)

### Run The Application

1. Create a project folder (e.g. Restaurant-Review), start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.
2. From the terminal, verify the version of Python installed on your computer.  Type `python -v`
   * Python v2.x: Change the directory to your project directory.  Type the following into the terminal - `python -m SimpleHTTPServer 8000`
   * Python v3.x: Change the directory to your project directory.  Type the following into the terminal - `python3 -m http.server 8000`.

3. With your server running, visit the site: `http://localhost:8000`, from your web browser (e.g. Chrome).

## Leaflet.js and Mapbox

IMPORTANT:  This application requires an API key (free).  The key assigned to me is already in the code.  Please go to [Mapbox](https://www.mapbox.com/) to get your own API key.  Then replace the API key in the following two locations:

* main.js  Search for the initMap() near line 82.  Insert API key for `mapToken`
* restaurant_info.js  Search for the initMap() near line 14.  Insert API key for `mapboxToken`.

## Code Dependencies

Required Files:

* index.html (includes links/scripts for Mapbox API, leaflet & normalize.css)
* restaurant.html (includes links/scripts leaflet & normalize.css)
* css/styles.css
* data/restaurants.json
* img/1.jpg thru 10.jpg
* js/dbhelper.js
* js/main.js
* js/restaurant_info.js
* js/sw.js