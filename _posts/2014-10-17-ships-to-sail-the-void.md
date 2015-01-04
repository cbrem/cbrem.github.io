---
title: Ships to Sail the Void
category: Art
---

<iframe width="400" height="255" src="//www.youtube.com/embed/gj2w1DE4Au8" frameborder="0" allowfullscreen></iframe>

“When ships to sail the void between the stars have been built, there will step forth men to sail these ships.”
― Johannes Kepler

Satellites are funny things. It’s easy to forget how rapidly they circle the earth: it takes us a day to make a full rotation, but some satellites can complete an orbit in an hour and a half. At those speeds, reality is warped, and time bends.

What’s even stranger is that one of these satellites, the International Space Station, has people in it.

*Ships to Sail the Void* plots the trajectory of the Space Station with a laser that it shines onto nearby surfaces. When it is activated, it takes a minute to show the path that the Space station will take over the next one hundred minutes.

Whenever it starts, it pulls tracking data from [n2yo](http://www.n2yo.com). It sends instructions over Firmata (I used [PyMata](https://github.com/MrYsLab/PyMata) on the Python side) to a microcontroller, which moves the laser dot.
