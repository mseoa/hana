package oop;

import java.util.Objects;

public class SuperPerson {
	public static void main(String[] args) {
		Person hong = new Person("Hong", 25);
		System.out.println("hong = " + hong);
		Person kim = new Person("Kim", 30);
		System.out.println("kim = " + kim);
		// System.out.println(kim.age);
	}
}

@SuppressWarnings("checkstyle:OneTopLevelClass")
class Person {
	private final String name; // 멤버변수는 private하게 가야함. 누가 내 이름을 못바꾸게
	private int age;

	public Person(String name, int age) {
		this.name = name;
		this.age = age;
	}

	public String getName() {
		return name;
	}

	public int getAge() {
		return age;
		// 암호화를 할 수 있음.
	}

	public void setAge(int age) {
		this.age = age;
		// 제약을 걸 수 있음.
	}

	@Override // 부모에 상속받는거는 override 붙이는게 좋음
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null || getClass() != obj.getClass()) {
			return false;
		}
		Person person = (Person)obj;
		return age == person.age && Objects.equals(name, person.name);
	}

	@Override
	public int hashCode() {
		return Objects.hash(name, age);
	}

	@Override
	public String toString() {
		return "Person{" + "name='" + name + '\'' + ", age=" + age + '}';
	} // 예전에는 string builder로 했는데 이제 성능이 좋아져서 이렇게 사용함

}
