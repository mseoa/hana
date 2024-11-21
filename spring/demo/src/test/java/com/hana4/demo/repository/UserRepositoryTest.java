package com.hana4.demo.repository;

import static org.junit.jupiter.api.Assertions.*;
import static org.assertj.core.api.Assertions.*;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.stereotype.Controller;

import com.hana4.demo.domain.User;

class UserRepositoryTest {
	final UserRepository repository = new VolatileUserRepository();

	@BeforeEach
	public void beforeEach(){
		repository.init();
	}

	@Test
	void findAll() {
	}

	@Test
	public void addUser() {
		User user = new User(0L,"Hong");
		Long newerId = repository.addUser(user);
		assertEquals(1, newerId);

		Optional<User> newer = repository.findById(newerId);
		newer.ifPresent(a -> assertThat(a).isEqualTo(user));
	}

	@Test
	void saveUser() {
		Optional<User> user = repository.findById(1L);
		user.
	}

	@Test
	void deleteUser() {
	}

	@Test
	void findById() {
	}

	@Test
	void findByUsername() {
	}
}
