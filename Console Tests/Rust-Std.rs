
fn print_numbers() {
    for i in 1..=100 {
        if i % 5 == 0 && i % 7 == 0 {
            println!("Five-Seven");
        } else if i % 5 == 0 {
            println!("Five");
        } else if i % 7 == 0 {
            println!("Seven");
        } else {
            println!("{}", i);
        }
    }
}

fn main() {
    print_numbers();
}
