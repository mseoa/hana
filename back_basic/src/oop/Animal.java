package oop;

abstract class Animal {
	public static
	private int age;
	private String name;

	public void bark() {
		System.out.println("BARK!!!");
	}

	abstract void walk(); // 얘가 있는 순간 abstract class가 됨
}
