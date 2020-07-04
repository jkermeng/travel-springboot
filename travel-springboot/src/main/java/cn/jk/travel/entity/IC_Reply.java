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
@NoArgsConstructor
@RequiredArgsConstructor
public class IC_Reply implements Serializable {
    @NonNull
    private Integer ticr_id;
    private Integer tic_id;
    private String ticr_context;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date ticr_createTime;
    private Integer ticr_customer_replyId;
    private Integer tu_id;

    private User user;
    private List<IC_Reply> replyList;
}
