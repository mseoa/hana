package oop;

// Class 'Dog' must either be declared abstract or implement abstract method 'walk()' in 'Animal
public class Dog extends Animal implements Flyable {

	@Override
	void walk() {
		System.out.println("Dog Bark!!");
	}

	@Override
	public void fly() {
		System.out.println("fly by ears!!");
	}

	@Override
	public void landing() {
		Flyable.super.landing();
	}

	public static void main(String[] args) {
		Dog maxx = new Dog();
		maxx.fly();
		maxx.landing();
	}
}
