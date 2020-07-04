package cn.jk.travel.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

@Data
@JsonIgnoreProperties(value = {"handler"})
public class G_Order implements Serializable {
    private Integer to_id;
    private Integer tps_id;
    private Integer tg_id;
    private Double to_price;
    private String to_name;
    private Integer to_status;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date to_createTime;
    private Integer tu_id;
    private String to_title;

    private User customer;
    private Post_Sale post_sale;
}
