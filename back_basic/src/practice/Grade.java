package practice;

import java.util.Arrays;

public class Grade {
	public static void main(String[] args) {
		System.out.println("args" + Arrays.toString(args));
		int[] nums = {1, 2, 3}; // stack 영역에 nums가 생김. heap에 1,2,3들어감
		callByRef(nums); // callByRef에  nums의 주소 100번지
		System.out.println("nums= " + Arrays.toString(nums));
	}

	public static void callByRef(int[] scores) {
		// scores에 100번지의 1번인덱스가 들어가게됨
		scores[1] = 100;
		System.out.println("scores = " + Arrays.toString(scores));
	}
}
