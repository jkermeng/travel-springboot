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
public class Information implements Serializable {
    private Integer ti_id;
    private String ti_title;
    private String ti_context;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date ti_createTime;

    private TI_Img ti_img;
    private List<TI_Img> imgList;
    private List<Information_Comment> commentList;
}
