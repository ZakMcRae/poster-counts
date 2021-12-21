# Developer Assessment

### Finished assessment: [Concert Poster Sales](https://zakmcrae.github.io/poster-counts/)
Tech Used: React, Redux, Redux Toolkit, CSS

Assesment Instructions:  
What you see in the picture is one section of our "Counts" section of a settlement for a night.  This is one line of counts for the "Poster" that was selling for a price of $10.  Looks like we made $70 that night for the poster!  If there was more than one "size" for the poster then there would be another row in the grid, and the totals at the bottom of the grid, to the right of the "More" button, would be totals for that column.  The blue donut graph represents the percent of "Total In" that was sold.  so 7 out of the 12 were sold.

You can type numbers into the boxes in the grid that are black green and red coloured.  They calculate the blue numbers dynamically as you leave the cell.  The formulae are as follows.  (note: the numbers at the bottom are off in the total, as this is just a screen grab of a small section of the page.)

Total In = count in  + add

Total Sold = Total In - count out - comp

When you press the settle button you can no longer edit the grid.

When you press the "More" Button you should be presented a popover type box, like the one on the left under the picture, which allows you to change the price of the item, or add a note to this item. When you update the price or the notes the page should reflect the changes you made without reloading.  (The whole page shouldn't reload for any of this). If a description is entered, then a small circular exclamation mark is floated over the top right corner of the picture which one can hover over to see a pop up with the message inside.  (Asset for that not provided, you’ll have to figure that part out :).
