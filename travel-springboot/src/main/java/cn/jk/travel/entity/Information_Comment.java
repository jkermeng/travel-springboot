package cn.jk.travel.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Data
@JsonIgnoreProperties(value = {"handler"})
@RequiredArgsConstructor
@NoArgsConstructor
public class Information_Comment implements Serializable {
    @NonNull
    private Integer tic_id;
    private Integer ti_id;
    private String tic_context;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date tic_createTime;
    private Integer tu_id;

    private User user;
    private List<IC_Reply> ic_replyList;
}
