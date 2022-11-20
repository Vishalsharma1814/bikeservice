package bikeservice.service.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Data
@Table(name = "mstunit")
public class Unit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rowid")
    private Long rowId;

    @Column(name = "unitcode")
    private String unitCode;

    @Column(name = "unit")
    private String unit;

    @Column(name = "status")
    private String status;

    @Column(name = "createdt")
    private Date createdt;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Unit unit1 = (Unit) o;
        return Objects.equals(rowId, unit1.rowId) && Objects.equals(unitCode, unit1.unitCode) && Objects.equals(unit, unit1.unit) && Objects.equals(status, unit1.status) && Objects.equals(createdt, unit1.createdt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(rowId, unitCode, unit, status, createdt);
    }
}
