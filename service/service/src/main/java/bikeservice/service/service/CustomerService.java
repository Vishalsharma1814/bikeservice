package bikeservice.service.service;

import bikeservice.service.entity.Customer;
import bikeservice.service.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepository;

    public Customer saveCustomer(Customer customer){
        Customer C1= customerRepository.findByVehicleNo(customer.getVehicleNo());
        if(C1!=null){
            C1.setVehicleNo(customer.getVehicleNo());
            C1.setOwnerName(customer.getOwnerName());
            C1.setMobile_number(customer.getMobile_number());
            C1.setEmail(customer.getEmail());
            C1.setImage(customer.getImage());
            C1.setAddress(customer.getAddress());
            C1.setEngineNumber(customer.getEngineNumber());
            C1.setModel(customer.getModel());
            C1.setCreatedt(customer.getCreatedt());
           return  customerRepository.save(C1);

        }else {
            Customer cc = new Customer();
            cc.setVehicleNo(customer.getVehicleNo());
            cc.setOwnerName(customer.getOwnerName());
            cc.setMobile_number(customer.getMobile_number());
            cc.setEmail(customer.getEmail());
            cc.setImage(customer.getImage());
            cc.setAddress(customer.getAddress());
            cc.setEngineNumber(customer.getEngineNumber());
            cc.setModel(customer.getModel());
            cc.setCreatedt(customer.getCreatedt());
            cc.setCustomerCode(customerRepository.getCustomerCode());
            return customerRepository.save(cc);
        }
    }

    public List<Customer> getCustomer(){
        return customerRepository.findAll();
    }

    public Customer getCustomerByVehicleNo(String vehicleNo){
        return  customerRepository.findByVehicleNo(vehicleNo);
    }
}
