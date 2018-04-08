let RcCommand = {
    STOP: 0,
    FORWARD: 1,
    BACK: 2,
    RIGHT: 3,
    LEFT: 4,
    A: 5,
    B: 6,
};

let forwardSpeed = 50;
let reverseSpeed = 30;
let turnSpeedHigh = 20;
let turnSpeedLow = 10;

function driveForward() {
    motobit.enable(MotorPower.On);
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, forwardSpeed);
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, forwardSpeed);
}

function driveBack() {
    motobit.enable(MotorPower.On);
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, reverseSpeed);
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, reverseSpeed);
}

function driveRight() {
    motobit.enable(MotorPower.On);
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, turnSpeedHigh);
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, turnSpeedLow);
}

function driveLeft() {
    motobit.enable(MotorPower.On);
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, turnSpeedLow);
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, turnSpeedHigh);
}

function driveStop() {
    motobit.enable(MotorPower.Off);
}

radio.setGroup(1)
basic.showIcon(IconNames.Square)

radio.onDataPacketReceived(({ receivedNumber }) => {
    switch (receivedNumber) {
        case RcCommand.FORWARD:
            basic.showArrow(ArrowNames.North);
            driveForward();
            break;
        case RcCommand.BACK:
            basic.showArrow(ArrowNames.South);
            driveBack();
            break;
        case RcCommand.RIGHT:
            basic.showArrow(ArrowNames.East);
            driveRight();
            break;
        case RcCommand.LEFT:
            basic.showArrow(ArrowNames.West);
            driveLeft();
            break;
        case RcCommand.STOP:
            basic.showIcon(IconNames.Square);
            driveStop();
            break;
        case RcCommand.A:
            basic.showString("A");
            break;
        case RcCommand.B:
            basic.showString("B");
            break;
    }
})

