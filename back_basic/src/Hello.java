public class Hello {
	private static int x;

	// public static int getId(); // 이런식으로 만들어놔야  내부에서 Hello.getId로 접근 가능. 그냥 getId는 안됨.static은 Hello.getId

	public static void main(String[] args) {
		Hello.x = 999;
		Hello hello = new Hello();
		// System.out.println("hello.x = " + hello.x);;
		System.out.println("Hello.x = " + Hello.x);
		System.out.println("Hello~");
		String s1 = "abc";
		String s2 = "def";
		String s3 = "def";
		System.out.println(s1 == s2);
		String s4 = new String("def");
		String s5 = new String("def");
		System.out.println(s2 == s3);
		System.out.println(s2 == s4);
		System.out.println(s4 == s5); // 인스턴스는 다른 주소

		System.out.println(s4.equals(s3));
		System.out.println(s4.equals(s5));
	}
}
