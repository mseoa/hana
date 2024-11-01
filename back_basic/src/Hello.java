public class Hello {
	public static void main(String[] args) {
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
