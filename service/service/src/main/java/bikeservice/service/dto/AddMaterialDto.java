package bikeservice.service.dto;

import lombok.Data;

import java.util.Date;

@Data
public class AddMaterialDto {
    private String materialName;
    private String unit;
    private Date createdt;
}
