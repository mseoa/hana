package practice;

import practice.shape.Rectangle;

public class TryMain {
	public static void main(String[] args) {
		// Circle circle = new Circle();
		// Circle circle2 = new Circle(2);
		//
		// System.out.println("circle = " + circle);
		// System.out.println("circle2 = " + circle2);

		Employee[] employees = new Employee[3];
		employees[0] = new Employee(1, "코난", 25000000);
		employees[1] = new Employee(2, "장미", 30000000);
		employees[2] = new Employee(3, "미란", 40000000);

		Rectangle rect1 = new Rectangle();
		Rectangle rect2 = new Rectangle(3, 4);
		System.out.println("rect1 = " + rect1);
		System.out.println("rect2 = " + rect2);

		for (Employee employee : employees) {
			System.out.println(employee.getId() + " " + employee.getName() + " " + employee.getSalary());
		}

		for (Employee employee : employees) {
			System.out.println(employee);
		}

		InvoiceItem it1 = new InvoiceItem("item1", "PongPong", 5, 3000);
		System.out.println("it1 = " + it1);
	}
}
