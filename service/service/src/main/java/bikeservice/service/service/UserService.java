package bikeservice.service.service;

import bikeservice.service.dto.AddMaterialDto;
import bikeservice.service.dto.LoginDTO;
import bikeservice.service.entity.Material;
import bikeservice.service.entity.User;
import bikeservice.service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public List<User> getAllUsers(){
       return userRepository.findAll();
    }

    public User saveUser(User user){
        User user1= new User();
        user1.setName(user.getName());
        user1.setEmail(user.getEmail());
        user1.setAddress(user.getAddress());
        user1.setUsercode(userRepository.getUserCode());
        user1.setPassword(user.getPassword());
        user1.setCreatedt(new Date());

        return userRepository.save(user1);
    }

    public String loginUser(LoginDTO loginDTO){
        User user= userRepository.getByEmailID(loginDTO.getEmail());

        if(user.getPassword()==loginDTO.getPassword()){
            return "Sucess";
        }
        return "False";

    }
}
