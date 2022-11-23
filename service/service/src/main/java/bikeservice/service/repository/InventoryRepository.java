package bikeservice.service.repository;

import bikeservice.service.entity.Inventory;
import bikeservice.service.entity.Material;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Long> {
    Inventory findByMaterial(String material);

}
