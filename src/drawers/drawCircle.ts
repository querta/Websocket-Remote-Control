import { moveMouse, dragMouse, mouseToggle} from 'robotjs';

const drawCircle = (x: number, y: number, rad: number) => {
    moveMouse(x + rad, y);
    mouseToggle('down');
    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
        const newX = x + (rad * Math.cos(i));
        const newY = y + (rad * Math.sin(i));
        dragMouse(newX, newY);
    };
    mouseToggle('up');
}

export default drawCircle;
