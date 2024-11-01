package practice;

import java.util.Arrays;
import java.util.Scanner;

public class Two {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("학생 수를 입력하세요");
		int studentNum = sc.nextInt();
		int[] student = new int[studentNum];

		for (int i = 0; i < studentNum; i++) {
			System.out.println(i + "번 학생의 점수를 입력하세요");
			student[i] = sc.nextInt();
		}
		System.out.println(studentNum + "명의 학생 성적은 다음과 같습니다.");

		System.out.println(Arrays.toString(student).replaceAll("[\\[\\]]", ""));

		for (int i = 0; i < studentNum; i++) {
			String grade = grade(student[i]);
			System.out.println(i + "번 학생의 등급은 " + grade + "입니다.");
		}
	}

	static String grade(int score) {
		return switch (score / 10) {
			case 9, 10 -> "A";
			case 8 -> "B";
			case 7 -> "C";
			case 6 -> "D";
			default -> "F";
		};
	}
}
