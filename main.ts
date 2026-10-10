input.onButtonPressed(Button.A, function () {
    kaloria = lepesek * 0.05
    basic.showNumber(kaloria)
})
input.onGesture(Gesture.Shake, function () {
    lepesek += 1
})
let kaloria = 0
let lepesek = 0
lepesek = 0
basic.forever(function () {
	
})
