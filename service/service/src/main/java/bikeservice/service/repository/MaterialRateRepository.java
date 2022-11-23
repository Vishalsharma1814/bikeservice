package bikeservice.service.repository;

import bikeservice.service.entity.Material;
import bikeservice.service.entity.MaterialRate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface MaterialRateRepository extends JpaRepository<MaterialRate, Long> {
    @Query(nativeQuery = true, value = "select concat('MRT',REPLICATE(0,5-len(isNULL(max(cast(convert(varchar,substring(rate_code,4,15)) as int)),0)+1)), isNULL(max(cast(convert(varchar,substring(rate_code,4,15)) as int)),0)+1) as cd from mst_material_rate where rate_code like 'MRT%'")
    public String getRateCode();
}
