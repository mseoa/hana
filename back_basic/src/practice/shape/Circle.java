package practice.shape;

public class Circle {
	private double radius = 1.0;
	private String color;

	public Circle(double radius) {
		this.radius = radius;
		this.color = "red";
	}

	public Circle() {
		this(1.0);
	}

	public double getRadius() {
		return radius;
	}

	public void setRadius(double radius) {
		this.radius = radius;
	}

	public double getArea() {
		return Math.PI * Math.pow(radius, 2);
	}

	public double getCircumference() {
		return Math.PI * this.radius * 2;
	}

	@Override
	public String toString() {
		return "Circle{radius=%s의 둘레는 '%.1f의 면적은'%.1f'}".formatted(radius, this.getCircumference(), this.getArea());
	}
}
