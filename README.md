This Day Planner project was a homework assignment to practice jQuery and Bootstrap. I personally find jQuery a challenge and very complex to write. I do not understand it very well.
This project was aided by Google, Stack Overflow, W3Schools and many other people's GitHub repositories. I borrowed heavily from all these sources.

My Day Planner comprises of the hours of the standard 9-5 work day. The current hour highlights as red, time past is grey, and time to come is green. The date in the header also changes day to day using Moment.js. Each time slot is an input field, and when the save button is pressed, the input data is saved to local storage to then be available when the page is refreshed. 


## Issues

One issue I've noticed with the save button is due to the transition on the button, you have to wait the 0.8 of a second until the CSS transition is finished before clicking otherwise it will refresh the page without saving the input.


## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```