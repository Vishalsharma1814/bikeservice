package bikeservice.service.controller;

import bikeservice.service.entity.Customer;
import bikeservice.service.entity.User;
import bikeservice.service.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CustomerCustomer {
    @Autowired
    CustomerService customerService;

    @GetMapping("/getAllCustomer")
    public List<Customer> getAllUsers(){
        return customerService.getCustomer();
    }
    @PutMapping("/saveCustomer")
    public Customer saveUser(@RequestBody Customer customer){
        return customerService.saveCustomer(customer);
    }

}
