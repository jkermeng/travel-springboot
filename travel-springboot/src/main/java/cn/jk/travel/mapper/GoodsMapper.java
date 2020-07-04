package cn.jk.travel.mapper;

import cn.jk.travel.entity.Goods;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GoodsMapper extends Dao<Goods> {
    @Override
    List<Goods> selectAll();

    @Override
    List<Goods> selectsByKey(Goods goods);

    @Override
    Integer update(Goods goods);

    @Override
    Integer delete(Goods goods);

    @Override
    Integer insert(Goods goods);

    @Override
    Goods selectById(Integer id);
}
