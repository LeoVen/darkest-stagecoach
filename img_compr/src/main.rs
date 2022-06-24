use std::path::PathBuf;

use png_compr::compress;

fn main() {
    let input = r"C:\Program Files (x86)\Steam\steamapps\common\DarkestDungeon\heroes\abomination\abomination.ability.five.png";
    let output = r"C:\Users\lvenk\Documents\Darkest Dungeon\tests\output.jpg";

    let path_input = PathBuf::from(input);
    let path_output = PathBuf::from(output);

    let data = std::fs::read(path_input).expect("failed to read input png");

    let data = compress(data);
    _ = std::fs::write(path_output, data);
}
