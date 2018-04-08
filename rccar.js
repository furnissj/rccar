radio.onDataPacketReceived( ({ receivedNumber }) =>  {
    switch (receivedNumber) {
        case RcCommand.FORWARD:
            basic.showArrow(ArrowNames.North);
            break;
        case RcCommand.BACK:
            basic.showArrow(ArrowNames.South);
            break;
        case RcCommand.RIGHT:
            basic.showArrow(ArrowNames.East);
            break;
        case RcCommand.LEFT:
            basic.showArrow(ArrowNames.West);
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
})
let RcCommand = {
    STOP: 0,
    FORWARD: 1,
    BACK: 2,
    RIGHT: 3,
    LEFT: 4,
    A: 5,
    B: 6,
};
radio.setGroup(1)
basic.showIcon(IconNames.Square)
