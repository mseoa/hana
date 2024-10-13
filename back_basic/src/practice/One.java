package practice;

import java.util.Scanner;

public class One {
	public static void main(String[] args) {
		// scanUserInfo();
		scanTemp();
	}

	private static void scanTemp() {
		final int currTemp = 20;
		Scanner scan = new Scanner(System.in);
		System.out.println("수심: ");
		int deep = scan.nextInt();
		double result = currTemp - Math.floor((double)((deep) / 10)) * 0.7;
		System.out.println(result);
	}

	private static void scanUserInfo() {
		Scanner sc = new Scanner(System.in);
		System.out.print("당신의 이름을 입력하세요-->> ");
		String name = sc.nextLine();
		System.out.print("당신의 주소를 입력하세요-->> ");
		String address = sc.nextLine();
		System.out.print("당신의 나이를 입력하세요-->> ");
		int age = sc.nextInt();
		System.out.print("당신의 키를 입력하세요-->> ");
		double height = sc.nextDouble();

		System.out.println("이름 " + name);
		System.out.println("주소 " + address);
		System.out.println("나이 " + age);
		System.out.println("키 " + height);

		System.out.printf("name is %s", name);
		System.out.printf("address is %s", address);
		System.out.printf("age is %d", age);
		System.out.printf("height is %4.1f", height);
	}
}
