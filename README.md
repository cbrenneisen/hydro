
<img width="100px" src="/public/logo.png"> Hydro
======================================

See it running <a href="https://cbrenneisen.github.io/hydro">right here</a>.


This is a web app that is used to aid healthcare professionals when dealing with patients who might need fluid resuscitation. 
It works by generating a score based on the patient's current EHR, lab results, and other metrics. 

Currently, a score of 5 or greater results in a recommendation for Fluid Resuscitation. 
A score of 3 or 4 results in a recommendation for Maintenance IV Fluid. 
And a score of less than 3 results in no recommendation. 

Score is generated as follows: 
```
If systolic blood pressure is less than 90, add 3
If systolic blood pressure is in between 90 and 100, add 2
If systolic blood pressure is in between 100 and 120, add 1
If heart rate is greater than 120, add 2
If heart rate is in between 100 and 120, add 1
If capillary refill is 2 or more, add 1
If respiratory rate is above 25, add 1
If temperature is greater than 37.5, add 1
If oxygen is required, add 1
If the patient has changed locations, add 1
If the patient's urine output is less than 30, add 1
If the patient is over age 65, add 1
```

There are also certain 'disqualifying' observations where we will disregard the score and recommend NOT doing fluid resuscitation. Such findings include: 

```
If the patient is suffering from burns
If the patient has suffered a traumatic brain injury
If the patient is in shock
If the patient has gone through traumatic resuscitation
```

Lastly, if the patient is diabetic, we may recommend DKA Protocol and insulin gtt. 


## Why this app? 
Because I originally made a wonky jQuery app for this when doing courses in Biomedical Informatics. I thought I would revisit the problem using modern web technologies. 

## How? 

React is the main portion. Everything is broken down into the smallest viable component. 

There's React Router for the different pages.

There's SASS for the styling (converted to CSS on run). Every component gets their own stylesheet, to help encapsulate the styling and avoid rampant namespace issues. 

And lastly, RxJS for alerting the appropriate components when there's new data to be used. 
Changes to the patient score are retrieved from the FluidAction component using RxJS. The score is changed, and the component updates its state, causing a re-render to display the right message. MobX or Redux would have been a viable solution as well, but for a smaller app, the sequence pattern of Rx was much more appropriate. 

## Setup

Make sure Node.js & npm are properly installed.

Installing all dependencies (npm modules, React, React-Router, RxJS, etc):
```
npm install
```

Converting all scss to css and launching the app:
```
npm start
```

App runs on localhost:3000 by default
