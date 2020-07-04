package cn.jk.travel.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Data
@JsonIgnoreProperties(value = {"handler"})
public class Goods implements Serializable {
    private Integer tg_id;
    private String tg_title;
    private String tg_context;
    private String tg_price;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date tg_createTime;
    private Integer tu_id;
    private Integer tg_status;

    private User shopper;
    private TG_Img tg_img;
    private List<TG_Img> tg_imgList;
    private List<G_Server> g_serverList;
    private List<Post_Sale> post_saleList;
}
