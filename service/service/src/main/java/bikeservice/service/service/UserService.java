package bikeservice.service.service;

import bikeservice.service.entity.User;
import bikeservice.service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public List<User> getAllUsers(){
       return userRepository.findAll();
    }
    public User saveUser(User user){
        return userRepository.save(user);
    }
}
