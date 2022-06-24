import robot from 'robotjs';

const drawCircle = (x: number, y: number, rad: number) => {
    robot.moveMouse(x + rad, y);
    robot.mouseToggle('down');
    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
        const newX = x + (rad * Math.cos(i));
        const newY = y + (rad * Math.sin(i));
        robot.dragMouse(newX, newY);
    };
    robot.mouseToggle('up');
}

export default drawCircle;
