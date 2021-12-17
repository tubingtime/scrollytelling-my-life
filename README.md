# Scrolly telling my life
**I collected data on myself for a week and then visualized it to show who I am. I investigated how I spent my time, how I felt, and how much water I drank for about a week. I used scrolly telling to tell a story with this data and give it context.**

Javascript Libaries used:
- [Scrollama](https://github.com/russellgoldenberg/scrollama#scrollamajs) v2.21 for scrollytelling
- [D3](https://d3js.org/) v7.2.0 for drawing the charts 
- [D3-Annotation](https://d3-annotation.susielu.com/) v2.5.1
- [D3-Legend](https://d3-legend.susielu.com/) v2.25.6

To make contribute to this project simply clone the repository:

`git clone  https://github.com/tubingtime/scrollytelling-my-life`

And open index.html with your favorite browser. I used Firefox while making it so it probably works best on there.
### Adding more steps
Adding more steps (the blocks of text on the left) to the scrolly telling is relatively straightforward. Here is a template for a step that you can add inside `<section id="scrolly">` located in `index.html`.

```
<div class="step">
	<p class="step__header">Hello I am a step title.</p> 
        <p class="step__desc">Hello I am a step description.</p>
 </div>
```
The step's corresponding drawing is done by `drawing.js`.
Whenever a user enters a step scrollama will call `handleStepEnter()` in `drawing.js` with information about the step element including the index. You can set `debug` to true in the `init()` function to draw a line that shows exactly when `handleStepEnter()` is called. 

Each step has an index depending on where it is located in `index.html`. You can find what index a step has by un-commenting `console.log(response.index);`. Finally to make changes based on entering a specific step, add the steps index to the switch statement inside the `handleStepEnter()` function. The `svg` variable is the canvas inside of the sticky figure that you should edit.
### Future Work
 - animation 
 - audio
 - work breakdown interaction html navigation
	- or interactive split bar chart 
 - fix figure width going off screen
 - mobile version
 - image zoom
 - different kinds of data & visualizations
