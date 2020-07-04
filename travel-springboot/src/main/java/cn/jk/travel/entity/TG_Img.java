package cn.jk.travel.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import java.io.Serializable;

@Data
@JsonIgnoreProperties(value = {"handler"})
@RequiredArgsConstructor
@NoArgsConstructor
public class TG_Img implements Serializable {
    private Integer ttgi_id;
    @NonNull
    private Integer tg_id;
    private String ttgi_url;

}
