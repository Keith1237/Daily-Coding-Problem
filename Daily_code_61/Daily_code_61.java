package Daily_code_61;

public class Daily_code_61 {
    public static double implementation(int x, int y) {
        double value = 1;
        if (y > 0) {
            for (int i = 0; i < y; i++) {
                value = value * x;
            }
            return value;
        } else if (y == 0) {
            return value;
        } else {
            for (int i = 0; i > y; i--) {
                value = value * 1/2;
            }
            return value;
        }
    }
    
    public static void main(String[] args) {
        int x = 2; // Set the value of 'x'
        int y = 5;     // Set the value of 'y'
    
        double result = implementation(x, y);
        System.out.println(result);
    }
    
}
