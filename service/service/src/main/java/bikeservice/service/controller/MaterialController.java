package bikeservice.service.controller;

import bikeservice.service.dto.AddMaterialDto;
import bikeservice.service.entity.Material;
import bikeservice.service.entity.Unit;
import bikeservice.service.service.MaterialService;
import bikeservice.service.service.UnitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/material")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MaterialController {
    @Autowired
    MaterialService materialService;

    @Autowired
    UnitService unitService;

    @PutMapping("/saveMaterial")
    public Material saveMaterial(@RequestBody AddMaterialDto addMaterialDto){
        return materialService.saveMaterial(addMaterialDto);
    }

    @GetMapping("/changeStatus/{matCode}")
    public String changeStatus(@PathVariable String matCode){
        return materialService.changeStatus(matCode);
    }

    @GetMapping("/findByMatCode/{matCode}")
    public Material findByMatCode(@PathVariable String matCode){
        return materialService.findByMaterialCode(matCode);
    }


    @GetMapping("/getAllUnits")
    public List<Unit> getAllUnits(){
        return unitService.getAllUnits();
    }

    @GetMapping("/getAllMaterials")
    public List<Material> getAllMaterials(){
        return materialService.getAllMaterial();
    }
}
