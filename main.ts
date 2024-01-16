/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung & Julianne
 * Created on: Dec 2023
 * This program is the program used for the Pessimistic (just sad) Ladybug, which walks around and randomly chooses a quote to say.
 *
*/

// variables
// the array
const myArray = [
  'Our world is doomed.',
  'Repent.',
  'There is at least one person who does not like you.',
  'Have no faith, you are going nowhere in life.',
  'The end is near.',
  'Will this ever end?',
  'The game was rigged from the start.',
  'Theres nothing we can do.',
  'We are all going to die.',
  'You will eventually lose it all.',
  'If you expect the worst, youll never be disappointed.',
  'The guy you love hanging out with probably talks trash about you.',
  'You will never recover from this.',
  'There is no hope.',
  'Your grades are going to crash.',
  'You suck at this.',
  'You will always lose.',
  'You have tried so many times, why try again?',
  'They wont make it.',
  'You will be forgotten in history.']
let randomElement = myArray[randint(0, 19)]

// setup
basic.showIcon(IconNames.Sad)

// code itself
input.onButtonPressed(Button.A, function () {
  randomElement = myArray[randint(0, 19)]
  basic.showString(randomElement, 90)
  basic.pause(1000)
  basic.showIcon(IconNames.Sad)
})

