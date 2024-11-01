package practice;

import java.util.Arrays;

public class Avg {
	public static void main(String[] args) {
		System.out.println("전달받은 수는" + Arrays.toString(args));
		int sum = 0;
		for (String arg : args) {
			sum += Integer.parseInt(arg);
		}
		System.out.println("숫자들의 합은" + sum);
		System.out.println("숫자들의 평균은" + sum / args.length);
	}
}
