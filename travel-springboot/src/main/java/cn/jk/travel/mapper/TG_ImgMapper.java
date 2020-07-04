package cn.jk.travel.mapper;

import cn.jk.travel.entity.TG_Img;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TG_ImgMapper extends Dao<TG_Img> {
    @Override
    List<TG_Img> selectAll();

    @Override
    TG_Img selectById(Integer id);

    @Override
    Integer insert(TG_Img tg_img);

    @Override
    List<TG_Img> selectsByKey(TG_Img tg_img);
}
