package bikeservice.service.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Data
@Table(name = "mst_inventory")
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rowid")
    private Long rowid;

    @Column(name = "material")
    private String material;

    @Column(name = "unit")
    private String unit;

    @Column(name = "available_qty")
    private Integer availableQty;

    @Column(name = "alert_qty")
    private Integer alertQty;

    @Column(name = "descr")
    private String description;

    @Column(name = "status")
    private String status;

    @Column(name = "createdt")
    private Date createdt;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Inventory inventory = (Inventory) o;
        return Objects.equals(rowid, inventory.rowid) && Objects.equals(material, inventory.material) && Objects.equals(unit, inventory.unit) && Objects.equals(availableQty, inventory.availableQty) && Objects.equals(alertQty, inventory.alertQty) && Objects.equals(description, inventory.description) && Objects.equals(status, inventory.status) && Objects.equals(createdt, inventory.createdt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(rowid, material, unit, availableQty, alertQty, description, status, createdt);
    }

    @Override
    public String toString() {
        return "Inventory{" +
                "rowid=" + rowid +
                ", material=" + material +
                ", unit='" + unit + '\'' +
                ", availableQty=" + availableQty +
                ", alertQty=" + alertQty +
                ", description='" + description + '\'' +
                ", status='" + status + '\'' +
                ", createdt=" + createdt +
                '}';
    }
}
