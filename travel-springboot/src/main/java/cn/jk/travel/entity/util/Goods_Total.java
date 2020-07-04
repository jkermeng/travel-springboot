package cn.jk.travel.entity.util;

import cn.jk.travel.entity.Goods;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
@JsonIgnoreProperties(value = {"handler"})
public class Goods_Total implements Serializable {
    private Integer id;
    private Integer tg_id;
    private Double total;
    private Date saleDate;
    private Integer num;
    private Goods goods;

}
