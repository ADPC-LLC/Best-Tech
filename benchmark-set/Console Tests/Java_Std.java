public class Java_Std {
    public static void main(String[] args) {
        System.out.println("Hello World! I'm running on Java.");
        for (int i = 1; i <= 100; i++) {
            if (i % 5 == 0 && i % 7 == 0) {
                System.out.println("Five-Seven");
            } else if (i % 5 == 0) {
                System.out.println("Five");
            } else if (i % 7 == 0) {
                System.out.println("Seven");
            } else {
                System.out.println(i);
            }
        }
    }
}
