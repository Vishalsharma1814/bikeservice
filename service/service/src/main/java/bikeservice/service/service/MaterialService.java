package bikeservice.service.service;

import bikeservice.service.dto.AddMaterialDto;
import bikeservice.service.entity.Inventory;
import bikeservice.service.entity.Material;
import bikeservice.service.repository.InventoryRepository;
import bikeservice.service.repository.MaterialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class MaterialService {
    @Autowired
    MaterialRepository materialRepository;

    @Autowired
    InventoryRepository inventoryRepository;

    public Material saveMaterial(AddMaterialDto addMaterialDto){
        Material material = new Material();
        Inventory inventory = new Inventory();
        String matcode = materialRepository.getMaterialCode();
        material.setMaterialName(addMaterialDto.getMaterialName());
        material.setUnit(addMaterialDto.getUnit());
        material.setMaterialCode(matcode);
        material.setCreatedt(new Date());
        material.setStatus("No");
        inventory.setMaterial(matcode);
        inventory.setAlertQty(0);
        inventory.setDescription("none");
        inventory.setAvailableQty(0);
        inventory.setCreatedt(new Date());
        inventory.setUnit(addMaterialDto.getUnit());
        inventory.setStatus("No");
        inventoryRepository.save(inventory);
        return materialRepository.save(material);
    }
    public String changeStatus(String matCode){
        Material m = materialRepository.findByMaterialCode(matCode);
            if(m != null){
                System.out.println(m.getStatus());
                if(m.getStatus().equals("No")){
                    System.out.println("Entered in yes");
                    m.setStatus("Yes");
                    materialRepository.save(m);
                }else{
                    System.out.println("Entered in no");
                    m.setStatus("No");
                    materialRepository.save(m);
                }
                return "Status changed successfully";
                }else{
                    return "Material doesn't exist";
                }
    }

    public List<Material> getAllMaterial(){
        return materialRepository.findAll();
    }

    public Material findByMaterialCode(String matCode){
        return materialRepository.findByMaterialCode(matCode);
    }
}
