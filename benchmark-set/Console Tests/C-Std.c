#include <stdio.h>

void printNumbers() {
    printf("Hello World! I'm running on C.\n");
    for (int i = 1; i <= 100; i++) {
        if (i % 5 == 0 && i % 7 == 0) {
            printf("Five-Seven\n");
        } else if (i % 5 == 0) {
            printf("Five\n");
        } else if (i % 7 == 0) {
            printf("Seven\n");
        } else {
            printf("%d\n", i);
        }
    }
}

int main() {
    printNumbers();
    return 0;
}
