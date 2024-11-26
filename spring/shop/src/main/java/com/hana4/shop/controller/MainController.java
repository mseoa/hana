package com.hana4.shop.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.hana4.shop.dto.CustDTO;
import com.hana4.shop.dto.DeptDTO;
import com.hana4.shop.dto.DeptHierarchyDTO;
import com.hana4.shop.dto.EmpDTO;
import com.hana4.shop.service.MainService;

@Controller
public class MainController {

	private final MainService service;

	public MainController(MainService service) {
		this.service = service;
	}

	@RequestMapping("/")
	public String mainpage(Model model) {
		model.addAttribute("version", "0.1.1");

		List<CustDTO> custs = service.getCusts();
		model.addAttribute("custs", custs);

		List<Integer> list = new ArrayList<>(custs.size());
		for (int i = 0; i < custs.size(); i++) {
			list.add(i + 100);
		}
		model.addAttribute("list", list);

		model.addAttribute("createdate", new Date());

		List<DeptHierarchyDTO> depts = service.getDepartmentHierarchy();
		model.addAttribute("depts", depts);

		return "main";
	}

	@GetMapping("/add")
	public String adding() {
		return "add";
	}

	@PostMapping("/add")
	public String add(CustDTO cust) {
		// System.out.println("cust = " + cust);
		if (cust.getEmail().isBlank()) {
			cust.setEmail(null);
		}
		service.addCust(cust);
		System.out.println("cust = " + cust);
		return "redirect:/?insertId=" + cust.getId();
	}

	@GetMapping("/modify/{id}")
	public String modify(@PathVariable("id") Integer id, Model model) {
		CustDTO cust = service.find(id);
		model.addAttribute("cust", cust);
		return "modify";
	}

	// cust @modelAttribute랑 request body 차이
	@PostMapping("/modify/{id}")
	// public String update(@PathVariable("id") Integer id, CustDTO cust) {
	public String update(CustDTO cust) {
		// System.out.println("id = " + id);
		System.out.println("cust = " + cust);
		service.modify(cust);
		return "redirect:/";
	}

	@GetMapping("/remove/{id}")
	public String remove(@PathVariable("id") Integer id, Model model) {
		CustDTO cust = service.find(id);
		if (cust == null) {
			model.addAttribute("data", "Cust(#" + id + ")");
			model.addAttribute("message", "해당 고객이 없습니다");
			return "not-found";
		}
		service.remove(id);
		return "redirect:/";
	}

	@GetMapping("/dept")
	public String getDepartments(Model model) {
		List<DeptHierarchyDTO> depts = service.getDepartmentHierarchy();
		System.out.println("depts = " + depts);
		model.addAttribute("depts", depts);
		return "dept";
	}

	@GetMapping("/dept/form")
	public String showDeptForm(
		@RequestParam(value = "deptId", required = false) Integer deptId,
		@RequestParam(value = "pid", required = false) Integer pid,
		Model model
	) {
		List<DeptHierarchyDTO> depts = service.getDepartmentHierarchy();
		List<EmpDTO> emps = service.getAllEmployees();
		model.addAttribute("depts", depts);
		model.addAttribute("emps", emps);

		if (deptId != null) {
			DeptDTO dept = service.getDeptById(deptId);
			model.addAttribute("dept", dept);
		} else if (pid != null) {
			model.addAttribute("pid", pid);
		}

		return "dept_form";
	}

	@PostMapping("/dept/save")
	public String saveDept(@ModelAttribute DeptDTO dept) {
		if (dept.getId() != null) {
			service.updateDept(dept);
		} else {
			service.insertDept(dept);
		}
		return "redirect:/";
	}

	@PostMapping("/dept/delete")
	public String deleteDept(@RequestParam("deptId") int deptId, RedirectAttributes redirectAttributes) {
		try {
			service.deleteDept(deptId);
			redirectAttributes.addFlashAttribute("message", "부서가 성공적으로 삭제되었습니다.");
		} catch (Exception e) {
			redirectAttributes.addFlashAttribute("errorMessage", "부서를 삭제하는 중 오류가 발생했습니다.");
		}
		return "redirect:/";
	}
}
