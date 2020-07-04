package cn.jk.travel.mapper;

import cn.jk.travel.entity.TI_Img;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TI_ImgMapper extends Dao<TI_Img> {
    @Override
    List<TI_Img> selectAll();

    @Override
    TI_Img selectById(Integer id);

    @Override
    Integer insert(TI_Img ti_img);

    @Override
    List<TI_Img> selectsByKey(TI_Img ti_img);
}
