package bikeservice.service.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Data
@Table(name = "mst_material_rate")
public class MaterialRate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rowid")
    private Long rowid;

    @Column(name = "material")
    private String material;

    @Column(name = "unit")
    private String unit;
    @Column(name = "purchase_qty")
    private Integer purchaseQty;

    @Column(name = "rate_code")
    private String rateCode;
    @Column(name = "purchase_rate")
    private Integer purchaseRate;

    @Column(name = "status")
    private String status;

    @Column(name = "createdt")
    private Date createdt;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MaterialRate that = (MaterialRate) o;
        return Objects.equals(rowid, that.rowid) && Objects.equals(material, that.material) && Objects.equals(purchaseQty, that.purchaseQty) && Objects.equals(purchaseRate, that.purchaseRate) && Objects.equals(status, that.status) && Objects.equals(createdt, that.createdt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(rowid, material, purchaseQty, purchaseRate, status, createdt);
    }

    @Override
    public String toString() {
        return "MaterialRate{" +
                "rowid=" + rowid +
                ", material='" + material + '\'' +
                ", purchaseQty=" + purchaseQty +
                ", purchaseRate=" + purchaseRate +
                ", status='" + status + '\'' +
                ", createdt=" + createdt +
                '}';
    }
}
