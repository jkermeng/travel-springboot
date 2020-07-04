package cn.jk.travel.mapper;

import cn.jk.travel.entity.Role;

import java.util.List;
import java.util.Set;

public interface RoleMapper extends Dao<Role> {
    @Override
    List<Role> selectAll();

    @Override
    Role selectOneByKey(Role role);

    @Override
    List<Role> selectsByKey(Role role);

    @Override
    Integer deleteByList(List list);

    @Override
    Role selectById(Integer id);

    @Override
    Integer update(Role role);

    @Override
    Integer delete(Role role);

    @Override
    Integer insert(Role role);


}
