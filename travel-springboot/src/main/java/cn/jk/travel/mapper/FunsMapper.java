package cn.jk.travel.mapper;

import cn.jk.travel.entity.Funs;

import java.util.List;
import java.util.Set;

public interface FunsMapper extends Dao<Funs> {
    @Override
    List<Funs> selectAll();

    @Override
    List<Funs> selectsByKey(Funs funs);

    @Override
    Funs selectOneByKey(Funs funs);

    @Override
    Funs selectById(Integer id);

    List<Funs> selectByRoleId(Integer pid);

    List<Funs> selectByPid(Integer pid);

    @Override
    Integer update(Funs funs);

    @Override
    Integer delete(Funs funs);

    @Override
    Integer deleteByList(List list);

    @Override
    Integer insert(Funs funs);

}
