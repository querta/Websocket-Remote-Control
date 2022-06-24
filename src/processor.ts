import robot from 'robotjs';
import drawCircle from './drawers/drawCircle';

const processor = async (cmd: string, coord: number[]): Promise<string> => {
    const { x, y } = robot.getMousePos();

    // const [ reqX, reqY ] = [ coord[0], coord[1]];
    // let responce: string = '';

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
            //
            break;
        case 'draw_square':
            //
            break;
    }

    return ('');
}

export default processor;