package com.hana4.shop.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hana4.shop.dao.CustDAO;
import com.hana4.shop.dao.DeptDAO;
import com.hana4.shop.dto.CustDTO;
import com.hana4.shop.dto.DeptDTO;

@Service
public class MainService {

	// public final List<CustDTO> custs = new ArrayList<>();

	private final CustDAO custDAO;
	private final DeptDAO deptDAO;

	public MainService(CustDAO custDAO, DeptDAO deptDAO) {
		this.custDAO = custDAO;
		this.deptDAO = deptDAO;
	}

	// public MainService(CustDAO dao) {
	// CustDTO cust = new CustDTO();
	// cust.setId(1);
	// cust.setName("Hong");
	// cust.setTel("010-2222-3333");
	// custs.add(cust);
	// CustDTO cust2 = new CustDTO();
	// cust2.setId(2);
	// cust2.setName("김길동");
	// cust2.setTel("010-2222-4444");
	// custs.add(cust2);
	// }

	public List<CustDTO> getCusts() {
		return custDAO.getCusts();
	}

	public void addCust(CustDTO cust) {
		// int maxId = custs.size() + 1;
		// cust.setId(maxId);
		// custs.add(cust);
		//
		// return maxId;
		custDAO.insert(cust);
	}

	public CustDTO find(int id) {
		return custDAO.getCust(id);
	}

	public void modify(CustDTO cust) {
		custDAO.update(cust);
	}

	public void remove(Integer id) {
		custDAO.delete(id);
	}

	public List<DeptDTO> getDepartmentHierarchy() {
		return deptDAO.getDepartmentHierarchy();
	}
}
