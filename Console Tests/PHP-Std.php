<?php
function printNumbers() {
    echo "Hello World! I'm running in PHP.\n";
    for ($i = 1; $i <= 100; $i++) {
        if ($i % 5 == 0 && $i % 7 == 0) {
            echo "Five-Seven\n";
        } elseif ($i % 5 == 0) {
            echo "Five\n";
        } elseif ($i % 7 == 0) {
            echo "Seven\n";
        } else {
            echo $i . "\n";
        }
    }
}

printNumbers();
?>
