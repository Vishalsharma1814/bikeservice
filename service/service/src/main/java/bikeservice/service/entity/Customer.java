package bikeservice.service.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Data
@Table(name = "customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rowid")
    private Long rowid;

    @Column(name = "vehicle_no")
    private String vehicleNo;

    @Column(name = "owner_name")
    private String ownerName;

    @Column(name = "mobile_number")
    private String mobile_number;

    @Column(name = "email")
    private String email;

    @Column(name = "image")
    private String image;

    @Column(name = "address")
    private String address;

    @Column(name = "chechies_number")
    private String chechiesNumber;

    @Column(name = "engine_number")
    private String engineNumber;

    @Column(name = "bike_company")
    private String bikeComapny;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Customer customer = (Customer) o;
        return Objects.equals(rowid, customer.rowid) && Objects.equals(vehicleNo, customer.vehicleNo) && Objects.equals(ownerName, customer.ownerName) && Objects.equals(mobile_number, customer.mobile_number) && Objects.equals(email, customer.email) && Objects.equals(image, customer.image) && Objects.equals(address, customer.address) && Objects.equals(chechiesNumber, customer.chechiesNumber) && Objects.equals(engineNumber, customer.engineNumber) && Objects.equals(bikeComapny, customer.bikeComapny) && Objects.equals(model, customer.model) && Objects.equals(customerCode, customer.customerCode) && Objects.equals(createdt, customer.createdt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(rowid, vehicleNo, ownerName, mobile_number, email, image, address, chechiesNumber, engineNumber, bikeComapny, model, customerCode, createdt);
    }

    @Column(name = "model")
    private String model;

    @Column(name = "customer_code")
    private String customerCode;

    @Column(name = "createdt")
    private Date createdt;


}
