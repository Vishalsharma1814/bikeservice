package bikeservice.service.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Data
@Table(name = "mstmaterialunit")
public class Material {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rowid")
    private Long rowid;

    @Column(name = "material_code")
    private String materialCode;

    @Column(name = "material_name")
    private String materialName;

    @Column(name = "unit")
    private String unit;

    @Column(name = "createdt")
    private Date createdt;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Material material = (Material) o;
        return Objects.equals(rowid, material.rowid) && Objects.equals(materialCode, material.materialCode) && Objects.equals(materialName, material.materialName) && Objects.equals(unit, material.unit) && Objects.equals(createdt, material.createdt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(rowid, materialCode, materialName, unit, createdt);
    }

    @Override
    public String toString() {
        return "Material{" +
                "rowid=" + rowid +
                ", materialCode='" + materialCode + '\'' +
                ", materialName='" + materialName + '\'' +
                ", unit='" + unit + '\'' +
                ", createdt=" + createdt +
                '}';
    }
}

