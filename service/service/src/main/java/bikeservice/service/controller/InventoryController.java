package bikeservice.service.controller;

import bikeservice.service.dto.InventorySaveDTO;
import bikeservice.service.entity.Inventory;
import bikeservice.service.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/inventory")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class InventoryController {
    @Autowired
    InventoryService inventoryService;

    @PutMapping("/saveInventory")
    public Inventory saveInventory(@RequestBody InventorySaveDTO inventorySaveDTO){
        return inventoryService.updateInventory(inventorySaveDTO);
    }
}
