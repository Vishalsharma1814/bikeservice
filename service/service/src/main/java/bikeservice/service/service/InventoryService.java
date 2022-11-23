package bikeservice.service.service;

import bikeservice.service.dto.InventorySaveDTO;
import bikeservice.service.entity.Inventory;
import bikeservice.service.entity.MaterialRate;
import bikeservice.service.repository.InventoryRepository;
import bikeservice.service.repository.MaterialRateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class InventoryService {
    @Autowired
    InventoryRepository inventoryRepository;

    @Autowired
    MaterialRateRepository materialRateRepository;

    public Inventory updateInventory(InventorySaveDTO inventorySaveDTO){
       Inventory i =  inventoryRepository.findByMaterial(inventorySaveDTO.getMaterial());

            Inventory inventory = new Inventory();
            inventory.setRowid(i.getRowid());
            inventory.setAlertQty(inventorySaveDTO.getAlertQty());
            inventory.setDescription(inventorySaveDTO.getDescription());
            inventory.setMaterial(inventorySaveDTO.getMaterial());
            inventory.setStatus(inventory.getStatus());
            inventory.setAvailableQty(inventorySaveDTO.getAvailableQty());
            inventory.setCreatedt(new Date());
            inventory.setUnit(inventorySaveDTO.getUnit());
            MaterialRate materialRate = new MaterialRate();
            materialRate.setPurchaseQty(inventorySaveDTO.getPurchaseQty());
            materialRate.setPurchaseRate(inventorySaveDTO.getPurchaseRate());
            materialRate.setStatus("No");
            materialRate.setMaterial(inventorySaveDTO.getMaterial());
            materialRate.setUnit(inventorySaveDTO.getUnit());
            materialRate.setCreatedt(new Date());
            materialRate.setRateCode(materialRateRepository.getRateCode());
            materialRateRepository.save(materialRate);
            return inventoryRepository.save(inventory);

    }
}
