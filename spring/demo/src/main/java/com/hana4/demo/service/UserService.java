package com.hana4.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.hana4.demo.domain.User;
import com.hana4.demo.repository.UserRepository;

@Service
public class UserService {
	private final UserRepository repository;

	// 인젝션을 받는 애들은 퍼블릭이여야함
	public UserService(UserRepository repository) {
		this.repository = repository;
	}

	public List<User> getList() {
		return repository.findAll();
	}

	public Long regist(User user) {
		repository.findByUsername(user.getName()).ifPresent(u -> {
			throw new IllegalStateException("Duplicate name!");
		});
		return repository.addUser(user);
	}

	public Optional<User> findById(Long id) {
		return repository.findById(id);
	}

	public User update(User user) {
		return repository.saveUser(user);
	}

	public void delete(Long id) {
		repository.deleteUser(id);
	}
}
