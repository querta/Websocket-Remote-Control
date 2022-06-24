import robot from 'robotjs';

const drawRectangle = (mouseX: number, mouseY: number, size: number[]) => {
    let [ x, y ] = [ mouseX, mouseY];
    robot.mouseToggle('down');
    robot.moveMouseSmooth(x + size[0], y);
    robot.moveMouseSmooth(x + size[0], y + size[1]);
    robot.moveMouseSmooth(x, y + size[1]);
    robot.moveMouseSmooth(x, y);
    robot.mouseToggle('up');
}

export default drawRectangle;
