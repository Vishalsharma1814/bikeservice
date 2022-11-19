package bikeservice.service.controller;

import bikeservice.service.dto.AddMaterialDto;
import bikeservice.service.entity.Material;
import bikeservice.service.service.MaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/material")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MaterialController {
    @Autowired
    MaterialService materialService;

    @PutMapping("/saveMaterial")
    public Material saveMaterial(@RequestBody AddMaterialDto addMaterialDto){
        return materialService.saveMaterial(addMaterialDto);
    }
    @GetMapping("/hello")
    public String hello(){
        return "Hello";
    }
}
