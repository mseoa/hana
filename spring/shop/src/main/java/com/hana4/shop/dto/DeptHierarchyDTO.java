// package com.hana4.shop.dto;
//
// import lombok.Getter;
// import lombok.Setter;
//
// @Getter
// @Setter
// public class DeptDTO {
// 	private int id;
// 	private int pid;
// 	private String dname;
// 	private int captain;
//
// 	@Override
// 	public String toString() {
// 		return "DeptDTO{" +
// 			"id=" + id +
// 			", pid=" + pid +
// 			", dname='" + dname + '\'' +
// 			", captain=" + captain +
// 			'}';
// 	}
//
// 	// private String hierarchy;
// 	// private int depth;
// 	// private Long deptId;
// 	// private Long captainId;
// 	// private String captainName;
// 	//
// 	// @Override
// 	// public String toString() {
// 	// 	return "DeptDTO{" +
// 	// 		"hierarchy='" + hierarchy + '\'' +
// 	// 		", depth=" + depth +
// 	// 		", deptId=" + deptId +
// 	// 		", captainId=" + captainId +
// 	// 		", captainName='" + captainName + '\'' +
// 	// 		'}';
// 	// }
// }

package com.hana4.shop.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DeptHierarchyDTO {
	private int deptId;
	private int captainId;
	private String dname;
	private String hierarchy;
	private int depth;
	private String captainName;

	@Override
	public String toString() {
		return "DeptDTO{" +
			"deptId=" + deptId +
			", captainId=" + captainId +
			", dname='" + dname + '\'' +
			", hierarchy='" + hierarchy + '\'' +
			", depth=" + depth +
			", captainName='" + captainName + '\'' +
			'}';
	}
}
