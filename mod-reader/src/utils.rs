pub fn parse_value(val: &str) -> f32 {
    if val.ends_with('%') {
        val.strip_suffix('%')
            .unwrap()
            .parse::<f32>()
            .unwrap_or(9999.0)
            / 100.0
    } else {
        val.parse::<f32>().unwrap_or(99.0)
    }
}
