import { screen } from 'robotjs';
import Jimp from 'jimp'

const printScreen = async (x: number, y:number, size: number): Promise<string> => {
    let image = screen.capture(x, y, size, size);
    const jimp = new Jimp({
        data: image.image,
        width: image.width,
        height: image.height,
    });
    let red: number, green: number, blue: number;
    image.image.forEach((byte: number, i: number) => {
      switch (i % 4) {
        case 0: return blue = byte
        case 1: return green = byte
        case 2: return red = byte
        case 3: 
            jimp.bitmap.data[i - 3] = red;
            jimp.bitmap.data[i - 2] = green;
            jimp.bitmap.data[i - 1] = blue;
            jimp.bitmap.data[i] = 255
      }
    })
    const base64IMage = await jimp.getBase64Async(Jimp.MIME_PNG);
    const base64 = base64IMage.split(',')[1];

};

export default printScreen;