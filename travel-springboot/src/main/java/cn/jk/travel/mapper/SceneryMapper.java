package cn.jk.travel.mapper;

import cn.jk.travel.entity.Scenery;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SceneryMapper extends Dao<Scenery>{
    @Override
    List<Scenery> selectAll();

    @Override
    Integer insert(Scenery scenery);

    @Override
    Integer delete(Scenery scenery);
}
