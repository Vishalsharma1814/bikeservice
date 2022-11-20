package bikeservice.service.service;

import bikeservice.service.entity.Unit;
import bikeservice.service.repository.UnitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UnitService {
    @Autowired
    UnitRepository unitRepository;

    public List<Unit> getAllUnits(){
        return unitRepository.findAll();
    }
}
