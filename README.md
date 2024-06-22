# Overview
LearnBoost is an application for those students who want to study to enter a government university. Me with my friends developed this website  in order to complete our Software Engineering subject at our university. We build this web using HTML, Tailwind CSS, Node.js, Express.js and MySQL


## Installation
1. Change directory to your XAMPP htdocs directory
```
cd C:\xampp\htdocs
```

2. Clone this repository
```
https://github.com/ValeskaLim/LearnBoost-Question-Bank-Application.git
```

3. Navigate to the project directory
```
cd LearnBoost-Question-Bank-Application
```

5. Install Node.js dependencies
```
npm install
```

7. Install Express.js and MySQL modules
```
npm install express mysql
```

8. Install Tailwind CSS
```
npm install -D tailwindcss
npx tailwindcss init
```

9. Start the Tailwind CLI build process
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

10. Create database on Xampp, phpmyadmin
```
CREATE DATABASE learnboost;
```

11. Import database from ```database/learnboost_db.sql``` into the new database

10. Run the development server
```
npm start
```

## Usage
Open your browser and navigate to ```http://localhost:3000``` to see your application running.
