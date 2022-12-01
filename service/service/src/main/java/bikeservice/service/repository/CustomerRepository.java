package bikeservice.service.repository;

import bikeservice.service.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,Long> {
    @Query(nativeQuery = true, value = "  select concat('CUS',REPLICATE(0,5-len(isNULL(max(cast(convert(varchar,substring(customer_code,4,15)) as int)),0)+1)), isNULL(max(cast(convert(varchar,substring(customer_code,4,15)) as int)),0)+1) as cd from customer where customer_code like 'CUS%'\n")
    public String getCustomerCode();


    @Query(nativeQuery = true,value = "  select  * from customer c where vehichle_number=:vehicleNo;")
    Customer findByVehicleNo(String vehicleNo);

}
