package com.hana4.shop.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DeptDTO {
	private Integer id;         // 부서 ID
	private Integer pid;      // 부서장 ID
	private String dname;       // 부서명
	private Integer captain;
}
