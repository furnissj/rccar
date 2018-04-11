let RcCommand = {
    STOP: 0,
    FORWARD: 1,
    BACK: 2,
    RIGHT: 3,
    LEFT: 4,
    A: 5,
    B: 6,
};

let buttonForward = DigitalPin.P0;
let buttonBack = DigitalPin.P8;
let buttonRight = DigitalPin.P2;
let buttonLeft = DigitalPin.P1;
let buttonA = DigitalPin.P16;
let buttonB = DigitalPin.P12;

let PRESSED = 0;
let NOT_PRESSED = 1;

let lastCommand = RcCommand.STOP;
let newCommand = RcCommand.STOP;

pins.setPull(buttonForward, PinPullMode.PullUp);
pins.setPull(buttonBack, PinPullMode.PullUp);
pins.setPull(buttonRight, PinPullMode.PullUp);
pins.setPull(buttonLeft, PinPullMode.PullUp);
pins.setPull(buttonA, PinPullMode.PullUp);
pins.setPull(buttonB, PinPullMode.PullUp);

radio.setGroup(1);
basic.showIcon(IconNames.Square);

while (true) {
    if (PRESSED == pins.digitalReadPin(buttonForward)) {
        newCommand = RcCommand.FORWARD;
    }
    else if (PRESSED == pins.digitalReadPin(buttonBack)) {
        newCommand = RcCommand.BACK;
    }
    else if (PRESSED == pins.digitalReadPin(buttonRight)) {
        newCommand = RcCommand.RIGHT;
    }
    else if (PRESSED == pins.digitalReadPin(buttonLeft)) {
        newCommand = RcCommand.LEFT;
    }
    else if (PRESSED == pins.digitalReadPin(buttonA)) {
        newCommand = RcCommand.A;
    }
    else if (PRESSED == pins.digitalReadPin(buttonB)) {
        newCommand = RcCommand.B;
    }
    else {
        newCommand = RcCommand.STOP;
    }
    if (lastCommand != newCommand) {
        radio.sendNumber(newCommand);
        lastCommand = newCommand;
        switch (newCommand) {
            case RcCommand.FORWARD:
                basic.showArrow(ArrowNames.North);
                break;
            case RcCommand.BACK:
                basic.showArrow(ArrowNames.South);
                break;
            case RcCommand.RIGHT:
                basic.showArrow(ArrowNames.NorthEast);
                break;
            case RcCommand.LEFT:
                basic.showArrow(ArrowNames.NorthWest);
                break;
            case RcCommand.STOP:
                basic.showIcon(IconNames.Square);
                break;
            case RcCommand.A:
                basic.showString("A");
                break;
            case RcCommand.B:
                basic.showString("B");
                break;
        }

    }
    basic.pause(50);
}

