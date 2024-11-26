package com.hana4.shop.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.hana4.shop.dto.DeptDTO;
import com.hana4.shop.dto.DeptHierarchyDTO;

@Repository
@Mapper
public interface DeptDAO {
	List<DeptHierarchyDTO> getDepartmentHierarchy();

	DeptDTO getDeptById(Integer deptId);
	void insertDept(DeptDTO dept);
	void updateDept(DeptDTO dept);

	void deleteDept(Integer deptId);
}
