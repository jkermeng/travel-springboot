package cn.jk.travel.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
@JsonIgnoreProperties(value = {"handler"})
public class Post_Sale implements Serializable {
    private Integer tps_id;
    private Integer to_id;
    private Integer tps_score;
    private String tps_commment;
    private Integer tu_id;
    private Date tps_createTime;

    private User customer;
}
