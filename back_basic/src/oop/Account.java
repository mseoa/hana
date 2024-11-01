package oop;

public class Account {
	private int accountNo;
	private String name;
	private double balance;

	public Account(int accountNo, String name, double balance) {
		this.accountNo = accountNo;
		this.name = name;
		this.balance = balance;
	}

	public int getAccountNo() {
		return accountNo;
	}

	public String getName() {
		return name;
	}

	public double getBalance() {
		return balance;
	}

	public void setAccountNo(int accountNo) {
		this.accountNo = accountNo;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public void deposit(double amount) {
		this.balance += amount;
	}

	public void withdraw(double amount) {
		double bal = this.checkBalance();
		if (bal < amount) {
			System.out.println("잔액이 부족하여 출금할 수 없음!");
			return;
		}
		this.balance -= amount;
	}

	public double checkBalance() {
		return balance;
	}

	public int display() {
		return accountNo;
	}

	@Override
	public String toString() {
		return "Account{" + "accountNo=" + accountNo + ", name='" + name + '\'' + ", balance=" + balance + '}';
	}
}
