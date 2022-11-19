package bikeservice.service.controller;

import bikeservice.service.dto.LoginDTO;
import bikeservice.service.entity.User;
import bikeservice.service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class
UserController {
    @Autowired
    UserService userService;

    @GetMapping("/getAllUsers")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }
    @PostMapping("/saveUser")
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @PostMapping("/login")
    public String loginuser(@RequestBody LoginDTO loginDTO){
        return  userService.loginUser(loginDTO);
    }
}
