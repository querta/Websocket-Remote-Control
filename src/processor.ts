import robot from 'robotjs';
import drawCircle from './drawers/drawCircle';
import drawRectangle from './drawers/drawRectangle';
import printScreen from './drawers/printScreen';

const processor = async (cmd: string, coord: number[]): Promise<string> => {
    const { x, y } = robot.getMousePos();

    switch (cmd) {
        case 'mouse_position':
            return (`${x},${y}`);
        case 'mouse_up':
            robot.dragMouse(x, y - coord[0]);
            break;
        case 'mouse_down':
            robot.dragMouse(x, y + coord[0]);
            break;
        case 'mouse_left':
            robot.dragMouse(x - coord[0] , y);
            break;
        case 'mouse_right':
            robot.dragMouse(x + coord[0], y);
            break;
        case 'draw_circle':
            drawCircle(x, y, coord[0]);
            break;
        case 'draw_rectangle':
            drawRectangle(x, y, coord);
            break;
        case 'draw_square':
            coord[1] = coord[0];
            drawRectangle(x, y, coord);
            break;
        case 'prnt_scrn':
            const image = await printScreen(x, y, 200);
            return image;
        default:
            return ('Wrong_Command');
    }
    return ('');
}

export default processor;