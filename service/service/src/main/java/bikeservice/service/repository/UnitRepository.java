package bikeservice.service.repository;

import bikeservice.service.entity.Unit;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UnitRepository extends JpaRepository<Unit, Long> {
//    List<Unit> findByRowid(Long id);
}
