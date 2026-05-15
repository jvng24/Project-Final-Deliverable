MoodTrack

---Project Description--- 
    
    MoodTrack is a full-stack web application that allows users to log their daily mood and connect it with real-time weather data. The goal is to help users identify emotional patterns and understand how environmental factors, such as weather, may influence their mood over time. Each mood entry is stored in a database and displayed visually using charts and a history feed.

    The system uses:
        -Node.js + Express backend
        -Supabase database
        -Open-Meteo weather API
        -Vanilla HTML/CSS/JavaScript frontend
        -Chart.js for data visualization


---Target Browsers---

    MoodTrack is designed to work on all modern browsers, including:
        -Google Chrome (recommended)
        -Mozilla Firefox
        -Microsoft Edge
        -Safari (macOS & iOS)

    The application is responsive and works on both desktop and mobile devices


---Live Deployment---
project-final-deliverable-mk2y.vercel.app 

__________________________________________________ Developer Manual __________________________________________________ 

!!!!!   UNFORTUNATELY MY SITE CAN ONLY BE ACCESSED WITH THIS: http://localhost:3000 !!!!!!!

Installation 
    1. Clone repository 
        a. git clone <git@github.com:jvng24/Project-Final-Deliverable.git>
        b. cd MoodTrack

    2. Install dependencies 
        a. npm install
        - Required packages:
            - express
            -cors
            -dotenv
            -axios
            -@supabase/supabase-js



Enviornmental Variables
    -SUPABASE_URL=https://huxssisowpeldhimbqra.supabase.co
    -SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1eHNzaXNvd3BlbGRoaW1icXJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1OTE1NzQsImV4cCI6MjA5MjE2NzU3NH0.c9toaEdybOG5udWjeZzFogYqkERcups11AnLP674qnc



How to Run the Application
    1. Start the server
        a. node server/server.js
        -Server will run at: http://localhost:3000 
    2. Open
        a. http://localhost:3000/home.html 



Project Structure 
    client/
        js/
            about.js
            dashboard.js
            help.js
            home.js
        home.html
        dashboard.html
        about.html
        help.html
        styles.css
    Docs/
        README.me
    server/
        node_modules/
        routes/
            moods.js
            weather.js  
        .env
        package-lock.json
        package.json
        server.js
        supabase.js  



API Endpoints

    Mood Routes 
        -GET /api/moods --> Returns all mood entries from the database.
        -POST /api/moods --> Creates a new mood entry.
        -Request body:
            {
                "mood": 7,
                "note": "Had a productive day",
                "weather": 72
            }

    Weather Route
        -GET /api/weather --> Returns current weather data using Open-Meteo API:
            {
                "temperature": 72,
                "windspeed": 5.2,
                "weathercode": 1
            }
        -Data fetched live from Open-Meteo


Database

    This project uses Supabase as a cloud database.
    
    Table: moods

        Column	    Type
        id	        int
        mood	    int
        note	    text
        weather	    float
        created_at	timestamp



Features 
    -Log mood (1–10 scale)
    -Attach notes to mood entries
    -Automatically fetch real-time weather
    -Store data in Supabase
    -View mood trends over time
    -Interactive chart visualization
    -Mood history cards
    -Responsive UI


Libraries Used
    -Chart.js --> data visualization
    -AOS --> scroll animations 


Known issues 
    -Weather is fixed to Germantown, MD coordinates
    -No user authentication system
    -No ability to edit or delete mood entries
    -No offline support


Future Improvements
    -Add user login/authentication
    -Allow editing/deleting mood entries
    -Add calendar-based mood view
    -Improve weather visuals (icons/animations)
    -Add filtering (by date, mood level)
    -Add mobile app version

