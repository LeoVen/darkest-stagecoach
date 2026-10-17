use std::io::Cursor;

use image::{ImageReader, codecs::jpeg::JpegEncoder};

const JPEG_QUALITY: u8 = 50;

/// Re-encodes an image as a JPEG to reduce its size. Returns an empty vec if
/// the image can't be decoded.
pub fn compress(data: Vec<u8>) -> Vec<u8> {
    let Ok(reader) = ImageReader::new(Cursor::new(&*data)).with_guessed_format() else {
        return vec![];
    };
    let Ok(img) = reader.decode() else {
        return vec![];
    };

    // JPEG has no alpha channel
    let rgb = img.to_rgb8();

    let mut bytes = vec![];
    match JpegEncoder::new_with_quality(&mut bytes, JPEG_QUALITY).encode_image(&rgb) {
        Ok(()) => bytes,
        Err(_) => vec![],
    }
}
