package cn.jk.travel.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.io.Serializable;

@Data
@JsonIgnoreProperties(value = {"handler"})
public class G_Server implements Serializable {
    private Integer ts_id;
    private Integer tg_id;
    private String ts_name;
    private String ts_price;
}
