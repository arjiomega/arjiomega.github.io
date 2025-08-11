# Computer vision puzzle

![Sample Image](/projects_media/cv_puzzle/puzzle1.gif)

## How this works

![Sample Image](/projects_media/cv_puzzle/puzzle2.png)

We can see when we run the code that there are puzzle pieces at the top left of the display and the grid in the lower middle where we place them. When we drag each puzzle pieces to their correct location the correct slot turns to green as shown in the gif above.

This is the part of the code that is responsible for that color change to show that it is placed at the right location.

```python
goal_rule_x = goal_square_x[goal_idx] < square_x[goal_idx] < goal_square_x[goal_idx]+goal_size
goal_rule_y = goal_square_y[goal_idx] < square_y[goal_idx] < goal_square_y[goal_idx]+goal_size

if goal_rule_x and goal_rule_y:
    goal_colors[goal_idx] = (0,255,0)
```

![Sample Image](/projects_media/cv_puzzle/puzzle3.png)

Each of puzzle pieces is compared to each goal location and choose the closest puzzle box for each goal location.

![Sample Image](/projects_media/cv_puzzle/puzzle4.png)

goal box color turns to green if the goal rules are satisfied as shown on the code above.

[View code on Github](https://github.com/arjiomega/ComputerVision_Puzzle)