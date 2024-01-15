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
'It is not worth the bother of offing yourself, since you always off yourself too late.',
'The end is near.',
'Will this ever end?',
'Where is the light at the end of the tunnel?',
'The game was rigged from the start.',
'Theres nothing we can do.',
'We are all going to die.',
'If you live long enough, youll see that every victory turns into a defeat.',
'If you expect the worst, youll never be disappointed.',
'Someone who smiles too much with you can sometime frown too much with you at your back.',
'A pessimist is a man who looks both ways when he crosses the street.',
'There is no hope.',
''];
let randomElement = myArray[randint(0, 15)]

// setup
basic.showIcon(IconNames.Sad)

// code itself
input.onButtonPressed(Button.A, function () {
    randomElement = myArray[randint(0, 15)]
    basic.showString(randomElement, 90)
})
