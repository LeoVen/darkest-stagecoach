use std::io::Cursor;

use image::io::Reader as ImageReader;

pub fn compress(data: Vec<u8>) -> Vec<u8> {
    if let Ok(reader) = ImageReader::new(Cursor::new(&*data)).with_guessed_format() {
        if let Ok(img) = reader.decode() {
            let mut bytes = vec![];
            if let Ok(()) = img.write_to(
                &mut Cursor::new(&mut bytes),
                image::ImageOutputFormat::Jpeg(50),
            ) {
                return bytes;
            }
        }
    }

    vec![]
}
