# Intention Timer

This is an application that allows a user to set goals for their health and productivity, tied to an amount of time. Users will select an activity category, set the amount of time they want to spend on that activity, and start the timer. The app will log that activity to keep track of how the user has been spending their time.

## Motivation

This project was completed in a Turing Mod 1 project to practice and learn how to implement CSS, HTML, and Jacascript.

https://frontend.turing.io/projects/module-1/intention-timer-group.html

## Languages

Written in Javascript, CSS, and HTML

## Technology used

Built with Visual Studio Code

Code stored on GitHub

Running on GitHub Pages

## How to use?

The site is live at https://hayleyw7.github.io/intention-timer/.

### Form Functionality

* When an activity category is clicked on (Exercise, Meditate, or Study), the associated border and icon will change colors to give a visual indication that it has been selected.

* An input field is provided for What would you like to accomplish during this time?, minutes and seconds. The minutes and seconds fields only accept numbers.

* A user sees an error message if they attempt to submit the form without filling out all fields.

* A Start Activity button is provided to submit the data entered into the form.

* When the Start Activity button is clicked, the user no longer sees the form, and instead sees a timer clock. The timer clock displays the user-provided minutes and seconds, as well as the description.

* If the Start Activity button is clicked before the user has entered information into all four inputs, the user receives an error message, but does not lose any information that was provided.

### Timer

* The user can start the time by clicking Start.

* While timer is running, the user sees count down by second.

* When the timer completes, an alert appears in the browser, letting the user know that the time is up and the activity has been completed.

### Logging Past Activies

* When the timer completes, the alert no longer appears.

* Instead, a motivational or congratulatory message appears on the left side of the page, replacing the timer.

* When the user acknowledges the message and completion of the activity by clicking Log Activity, a card with the category, time, and the users input for What would you like to accomplish during this time? appears on the card.

* When the user refreshes the page, their past activities are still displayed.

## Screenshots

[title](url)

[title](url)

## Future additions

### Expand/Collapse Reflection

* When timer completes but before a card is created, the user can submit a reflection on the way they spent that time. Then, they can click the Log Activity button to create the card.

* The user will also a way to collapse the additional information/reflection.

### Favorite & Re-Do

* A user will able to favorite or re-do an activity.

* A favorite icon should be on the card. When clicked, the icon will change its appearance to communicate it has been favorited.

* An icon to represent re-do wil also be on the card. It will only be enabled when the left side of the page is displaying the New Activity form. If the re-do button is clicked, the form will populate with the data from the card that was clicked on.

## Contributors

Project completed by Andrew Vallejo, Alex Kio, and Hayley Witherell