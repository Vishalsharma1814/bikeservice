package bikeservice.service.dto;

import lombok.Data;

import javax.persistence.Column;

@Data
public class InventorySaveDTO {
    private String material;

    private String unit;

    private Integer availableQty;

    private Integer alertQty;

    private String description;

    private Integer purchaseQty;

    private Integer purchaseRate;
}
