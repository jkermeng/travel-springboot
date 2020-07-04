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
public class Scenery implements Serializable {
    @NonNull
    private Integer ts_id;
    private String ts_url;
    private String ts_descript;
}
