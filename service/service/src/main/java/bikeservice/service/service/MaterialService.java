package bikeservice.service.service;

import bikeservice.service.dto.AddMaterialDto;
import bikeservice.service.entity.Material;
import bikeservice.service.repository.MaterialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MaterialService {
    @Autowired
    MaterialRepository materialRepository;

    public Material saveMaterial(AddMaterialDto addMaterialDto){
        Material material = new Material();
        material.setMaterialName(addMaterialDto.getMaterialName());
        material.setUnit(addMaterialDto.getUnit());
        material.setCreatedt(addMaterialDto.getCreatedt());
        String matcode = materialRepository.getMaterialCode();
        material.setMaterialCode(matcode);
        return materialRepository.save(material);
    }

}
