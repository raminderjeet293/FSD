public class p1 {
    public static void main(String[] args) {
        int n = 5;
        int v = 1;
        for (int i = 1; i <= n; i++) {

            for (int j = 1; j <= i; j++) {

                System.out.print(v);
                v ^= 1;
                // v = (v == 0) ? 1 : 0;
                // if (v == 0) {

                // v = 1;

                // } else {
                // v = 0;

                // }

            }
            System.out.println();
        }
    }
}