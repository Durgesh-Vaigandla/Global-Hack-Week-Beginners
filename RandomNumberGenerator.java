import java.util.Random;

public class RandomNumberGenerator {

    public static void main(String[] args) {
        // Create an instance of the Random class
        Random random = new Random();

        // Generate a random integer
        int randomNumber = random.nextInt();

        // Print the generated random number
        System.out.println("Random Number: " + randomNumber);
    }
}

