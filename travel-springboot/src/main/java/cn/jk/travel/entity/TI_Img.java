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
public class TI_Img implements Serializable {
    private Integer ttii_id;
    @NonNull
    private Integer ti_id;
    private String ttii_url;
}
