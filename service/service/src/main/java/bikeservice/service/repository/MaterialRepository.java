package bikeservice.service.repository;

import bikeservice.service.entity.Material;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MaterialRepository extends JpaRepository<Material, Long> {
    @Query(nativeQuery = true, value = "select concat('MAT',REPLICATE(0,5-len(isNULL(max(cast(convert(varchar,substring(material_code,4,15)) as int)),0)+1)), isNULL(max(cast(convert(varchar,substring(material_code,4,15)) as int)),0)+1) as cd from mstmaterialunit where material_code like 'MAT%'")
    public String getMaterialCode();
    Material findByMaterialCode(String materialCode);

//    @Query(nativeQuery = true, value = "INSERT INTO mstmaterialunit (material_code, material_name, unit)" +
//            "VALUES (':matCode', ':matName', ':unit')")
//    void saveMaterial(@Param("matCode") String matCode, @Param("matName") String matName, @Param("unit") String unit);

}
