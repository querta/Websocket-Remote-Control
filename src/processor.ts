import robot from 'robotjs';
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
    }

    return ('');
}

export default processor;