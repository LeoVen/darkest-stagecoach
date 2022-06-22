use oxipng::{optimize_from_memory, Options};

pub fn compress(data: Vec<u8>) -> Vec<u8> {
    let opts = Options::default();
    let result = optimize_from_memory(&data, &opts);

    if let Ok(data) = result {
        return data;
    }

    data
}
