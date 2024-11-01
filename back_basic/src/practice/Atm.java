package practice;

import java.util.Scanner;

import oop.Account;

public class Atm {
	public static void main(String[] args) {
		System.out.println("---------------------------");
		Account conan = new Account(Integer.parseInt(args[0]), args[1], Double.parseDouble(args[2]));
		System.out.println("계좌번호 : " + conan.getAccountNo());
		System.out.println("예금주 : " + conan.getName());
		System.out.println("잔액 : " + conan.checkBalance() + "원");
		System.out.println("---------------------------");
		Scanner sc = new Scanner(System.in);

		LOOP:
		while (true) {
			System.out.println("\n어떤 업무를 보시겠습니까? (+입금/-출금/q종료)");
			String input = sc.next();

			switch (input) {
				case "+" -> {
					System.out.println("얼마를 입금하시겠습니까?");
					double amt = sc.nextDouble();
					conan.deposit(amt);
				}
				case "-" -> {
					System.out.println("얼마를 출금하시겠습니까?");
					double amt = sc.nextDouble();
					conan.withdraw(amt);
				}
				case "q" -> {
					break LOOP;
				}
				default -> System.out.println("잘못된 명령입니다");
			}

			System.out.println("코난님의 잔액은 " + conan.checkBalance() + "원 입니다.");
		}
	}
}
