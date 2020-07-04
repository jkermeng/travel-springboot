package cn.jk.travel.mapper;

import cn.jk.travel.entity.Information;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InformationMapper extends Dao<Information> {
    @Override
    List<Information> selectAll();

    @Override
    Information selectById(Integer id);

    @Override
    List<Information> selectsByKey(Information information);

    @Override
    Integer delete(Information information);

    @Override
    Integer insert(Information information);
}
